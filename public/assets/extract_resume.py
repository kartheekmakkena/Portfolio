import pymupdf4llm

file_path = 'assets/kar (1).pdf'

md_text = pymupdf4llm.to_markdown(
    doc=file_path,
    page_chunks=True,
    embed_images=True,
    image_format='png',
    force_text=True,
    table_strategy='lines_strict', 
)

if isinstance(md_text, list):
    for i, page in enumerate(md_text):
        print(f'\n=== PAGE {i+1} ===')
        print(page.get('text', ''))
else:
    print(md_text)
