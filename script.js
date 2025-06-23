const lines = [
  "AI Projects & Tools",
  "Giftify – AI for 🎁",
  "More APIs coming soon...",
  "Created with 💀 by ADM₹N"
];
let i=0, j=0, del=false;
const el = document.getElementById('typing');
function type() {
  const w = lines[i];
  if (!el) return;
  el.textContent = w.slice(0,j) + (j%2 ? '|' : '');
  if (!del && j <= w.length) j++;
  else if (del && j > 0) j--;
  if (j === w.length + 1) del = true;
  if (j === 0 && del) { del = false; i = (i+1)%lines.length; }
  setTimeout(type, del ? 60 : 100);
}
type();