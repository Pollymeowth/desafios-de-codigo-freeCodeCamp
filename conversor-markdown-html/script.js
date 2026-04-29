const markdownInput = document.getElementById('markdown-input');
const htmlOutput = document.getElementById('html-output');
const preview = document.getElementById('preview');

function convertMarkdown() {
  const input = document.getElementById('markdown-input').value;
  let html = input;
  
  // headings
  html = html.replace(/^\s*### (.+)$/gm, '<h3>$1</h3>');
  html = html.replace(/^\s*## (.+)$/gm, '<h2>$1</h2>');
  html = html.replace(/^\s*# (.+)$/gm, '<h1>$1</h1>');

  // blockquote
  html = html.replace(/^\s*> (.+)/gm, '<blockquote>$1</blockquote>');

  // images
  html = html.replace(/!\[([^\]]+)\]\(([^)]+)\)/g, '<img alt="$1" src="$2">');

  //links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

  // bold
  html = html.replace(/\*\*(.+?)\*\*|__(.+?)__/g, '<strong>$1$2</strong>');

  //italic
  html = html.replace(/\*(.+?)\*|_(.+?)_/g, '<em>$1$2</em>');

  html = html.replace(/\n/g, "");

  return html;
}

markdownInput.addEventListener('input', () =>{
  const converted = convertMarkdown();
  htmlOutput.innerText = converted;
  preview.innerHTML = converted;
})