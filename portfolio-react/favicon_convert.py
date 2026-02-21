"""
favicon_convert.py
------------------
Converts a photo to a proper multi-size favicon.ico (16, 32, 48 px)
with a circular crop.

Usage:
    python favicon_convert.py <input_image> <output_dir>

Example:
    python favicon_convert.py photo.jpg public/
"""

import sys
from pathlib import Path
from PIL import Image, ImageDraw

def make_circle(img: Image.Image, size: int) -> Image.Image:
    """Resize image to square, crop to circle, return RGBA image."""
    img = img.convert("RGB")
    img = img.resize((size, size), Image.LANCZOS)

    # Create circular mask
    mask = Image.new("L", (size, size), 0)
    draw = ImageDraw.Draw(mask)
    draw.ellipse((0, 0, size, size), fill=255)

    result = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    result.paste(img, mask=mask)
    return result

def main():
    if len(sys.argv) < 3:
        print("Usage: python favicon_convert.py <input_image> <output_dir>")
        sys.exit(1)

    src = Path(sys.argv[1])
    out_dir = Path(sys.argv[2])
    out_dir.mkdir(parents=True, exist_ok=True)

    img = Image.open(src)

    # Sizes for a proper ICO file
    sizes = [16, 32, 48]
    frames = [make_circle(img, s) for s in sizes]

    ico_path = out_dir / "favicon.ico"
    frames[0].save(
        ico_path,
        format="ICO",
        sizes=[(s, s) for s in sizes],
        append_images=frames[1:],
    )
    print(f"✓ Saved {ico_path}")

    # Also save a 180×180 PNG for Apple touch icon
    apple = make_circle(img, 180)
    apple_path = out_dir / "apple-touch-icon.png"
    apple.save(apple_path, format="PNG")
    print(f"✓ Saved {apple_path}")

if __name__ == "__main__":
    main()
