export default {
  tailwindToRem(val: number): number {
    return val * 0.25;
  },
  stripHtml(html: string) {
    const tmp = document.createElement('DIV');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  },
};
