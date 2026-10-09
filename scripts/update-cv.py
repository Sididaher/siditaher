import argparse
import io
import json
from pathlib import Path

from pypdf import PdfReader, PdfWriter
from reportlab.lib.colors import black, white
from reportlab.pdfgen import canvas


def update_cv(source: Path, levels: Path, output: Path) -> None:
    reader = PdfReader(source)
    page = reader.pages[0]
    width, height = float(page.mediabox.width), float(page.mediabox.height)
    language_data = json.loads(levels.read_text(encoding="utf-8"))
    overlay_data = io.BytesIO()
    overlay = canvas.Canvas(overlay_data, pagesize=(width, height))

    # The original CV has clear space beneath certifications.
    overlay.setFillColor(black)
    overlay.setFont("Times-Roman", 11.95)
    overlay.drawString(55.44, height - 747, "Langues")
    overlay.setFont("Times-Roman", 9)
    overlay.drawRightString(width - 55.44, height - 747, "CECRL")
    overlay.setStrokeColor(black)
    overlay.setLineWidth(0.4)
    overlay.line(55.44, height - 750, width - 55.44, height - 750)

    for language, x in zip(language_data["languages"], [55.44, 320]):
        current_index = language_data["scale"].index(language["level"])
        overlay.setFillColor(black)
        overlay.setFont("Times-Bold", 9.5)
        overlay.drawString(x, height - 769, f'{language["name"]["fr"]} : {language["level"]}')
        for index, level in enumerate(language_data["scale"]):
            left, bottom = x + 77 + index * 20, height - 772
            reached = index <= current_index
            overlay.setFillColor(black if reached else white)
            overlay.setStrokeColor(black)
            overlay.rect(left, bottom, 18, 13, stroke=1, fill=1)
            overlay.setFillColor(white if reached else black)
            overlay.setFont("Helvetica-Bold" if level == language["level"] else "Helvetica", 8)
            overlay.drawCentredString(left + 9, bottom + 3.8, level)

    overlay.save()
    overlay_data.seek(0)
    writer = PdfWriter()
    writer.clone_document_from_reader(reader)
    writer.pages[0].merge_page(PdfReader(overlay_data).pages[0])
    writer.add_metadata({"/Title": "Sid'Taher Oumar - CV", "/Author": "Sid'Taher Oumar"})
    output.parent.mkdir(parents=True, exist_ok=True)
    with output.open("wb") as stream:
        writer.write(stream)

    updated = PdfReader(output)
    assert len(updated.pages) == len(reader.pages), "Unexpected page count"
    assert reader.pages[0].extract_text() in updated.pages[0].extract_text(), "Original CV content changed"
    assert len(updated.pages[0].images) == len(reader.pages[0].images), "Unexpected image added"
    for language in language_data["languages"]:
        assert f'{language["name"]["fr"]} : {language["level"]}' in updated.pages[0].extract_text()
    print(json.dumps({"output": str(output.resolve()), "pages": len(updated.pages), "photo": False, "languages": language_data["languages"]}, ensure_ascii=True))


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Add monochrome language levels to the supplied CV.")
    parser.add_argument("--source", type=Path, required=True)
    parser.add_argument("--levels", type=Path, default=Path("lib/languages.json"))
    parser.add_argument("--output", type=Path, default=Path("public/cv/siditaher-oumar-cv.pdf"))
    args = parser.parse_args()
    update_cv(args.source, args.levels, args.output)
