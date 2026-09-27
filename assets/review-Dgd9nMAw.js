import{d as l,c as f}from"./index-WO8u8IYF.js";const h=`
body { margin: 0; background: #12172a; color: #eef1fa; font: 15px/1.5 system-ui, -apple-system, sans-serif; overflow: auto !important; }
.rv { max-width: 980px; margin: 0 auto; padding: 24px 18px 80px; }
.rv h1 { margin: 0 0 4px; font-size: 26px; } .rv .sub { color: #a9b3c9; margin-bottom: 22px; }
.card { background: #1d2433; border: 1px solid #2e3850; border-radius: 14px; padding: 16px 18px; margin-bottom: 22px; }
.card h2 { margin: 0; font-size: 18px; } .meta { color: #a9b3c9; font-size: 13px; margin: 2px 0 10px; }
.dropped { font-size: 12px; color: #ffb3a8; margin: 0 0 10px; }
.kind { margin: 14px 0 6px; font-size: 12px; letter-spacing: .08em; text-transform: uppercase; color: #ffd66b; }
.item { display: grid; grid-template-columns: 26px 1fr; gap: 8px; padding: 8px 0; border-top: 1px solid #2a3248; }
.item.off { opacity: .4; } .item input[type=checkbox] { margin-top: 4px; width: 18px; height: 18px; }
[contenteditable] { outline: none; border-radius: 4px; padding: 0 3px; } [contenteditable]:focus { background: #2b3552; }
.q { font-weight: 700; } .why { color: #a9b3c9; font-size: 13px; }
.ans { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 4px 12px; margin: 4px 0; font-size: 14px; }
.ans label { display: flex; gap: 6px; align-items: baseline; } .ans input { accent-color: #3fe0c8; }
.tf { font-size: 13px; color: #9dffb0; } .tf.no { color: #ffb3a8; }
.chips { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 4px; } .chips span { background: #2b3552; border-radius: 8px; padding: 1px 8px; font-size: 13px; }
.bar { display: flex; gap: 10px; margin-top: 14px; }
button { font: inherit; font-weight: 700; border: 0; border-radius: 10px; padding: 8px 16px; cursor: pointer; }
.ok { background: #ffd66b; color: #3a2400; } .no { background: transparent; color: #ffb3a8; border: 1px solid #ffb3a8; }
.empty { color: #a9b3c9; } .done { color: #9dffb0; font-weight: 700; }
`,s=i=>i.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);async function v(){document.head.insertAdjacentHTML("beforeend",`<style>${h}</style>`);const i=document.createElement("div");i.className="rv",document.body.replaceChildren(i);let t=[];try{t=await(await fetch("/__content/drafts")).json()}catch{i.innerHTML='<h1>Question drafts</h1><p class="empty">The review screen needs the dev server: run npm run dev.</p>';return}i.innerHTML=`<h1>Question drafts</h1>
    <div class="sub">From <b>npm run questions</b>. Untick what you don't want, click any text to fix it, tick the right answer, then approve. Approved sets go straight into the Study Hall.</div>
    ${t.length?"":'<p class="empty">No drafts. Put a lesson (PDF, photo, .txt) in content-inbox/ and run npm run questions.</p>'}`;for(const{name:o,draft:n}of t)i.appendChild(b(o,n))}function b(i,t){const o=t.bank,n=document.createElement("section");n.className="card";const c=(e,a,r)=>`<div class="item" data-kind="${e}" data-i="${a}"><input type="checkbox" checked aria-label="keep"><div>${r}</div></div>`;n.innerHTML=`<h2>${s(t.source)}</h2>
    <div class="meta">pack <b>${s(t.pack??"school")}</b> · ${s(t.provider)} · ${new Date(t.createdAt).toLocaleString()} · ${l(o)}</div>
    ${t.dropped.length?`<div class="dropped">Dropped by the checks: ${t.dropped.map(s).join(" · ")}</div>`:""}
    ${o.questions.length?'<div class="kind">Quiz</div>':""}
    ${o.questions.map((e,a)=>c("questions",a,`<div class="q" contenteditable data-f="q">${s(e.q)}</div>
      <div class="ans">${e.answers.map((r,d)=>`<label><input type="radio" name="${i}-q${a}" value="${d}" ${d===e.correct?"checked":""}><span contenteditable data-f="a${d}">${s(r)}</span></label>`).join("")}</div>
      <div class="why" contenteditable data-f="why">${s(e.why)}</div>`)).join("")}
    ${o.truefalse.length?'<div class="kind">True or false</div>':""}
    ${o.truefalse.map((e,a)=>c("truefalse",a,`<div class="q" contenteditable data-f="s">${s(e.s)}</div>
      <label class="tf ${e.true?"":"no"}"><input type="checkbox" data-f="true" ${e.true?"checked":""}> true</label>
      <div class="why" contenteditable data-f="why">${s(e.why)}</div>`)).join("")}
    ${o.pairs.length?'<div class="kind">Match pairs</div>':""}
    ${o.pairs.map((e,a)=>c("pairs",a,`<div class="q" contenteditable data-f="title">${s(e.title)}</div>
      <div class="chips">${e.pairs.map(([r,d])=>`<span>${s(r)} ↔ ${s(d)}</span>`).join("")}</div>`)).join("")}
    ${o.order.length?'<div class="kind">Put in order</div>':""}
    ${o.order.map((e,a)=>c("order",a,`<div class="q" contenteditable data-f="title">${s(e.title)}</div>
      <div class="chips">${e.items.map((r,d)=>`<span>${d+1}. ${s(r)}</span>`).join("")}</div>`)).join("")}
    <div class="bar"><button class="ok">Approve</button><button class="no">Discard</button><span class="status"></span></div>`,n.querySelectorAll(".item > input").forEach(e=>e.addEventListener("change",()=>e.parentElement.classList.toggle("off",!e.checked)));const p=n.querySelector(".status");return n.querySelector(".ok").addEventListener("click",async()=>{const e=m(n,t.bank),{bank:a}=f(e),r=await fetch("/__content/approve",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({name:i,bank:a,pack:t.pack??"school"})});if(!r.ok)return void(p.textContent=`Could not save (${r.status}).`);n.innerHTML=`<h2>${s(t.source)}</h2><p class="done">Approved: ${l(a)} into the ${s(t.pack??"school")} pack. It is in that pack's Study Hall now.</p>`}),n.querySelector(".no").addEventListener("click",async()=>{await fetch("/__content/discard",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({name:i})}),n.remove()}),n}function m(i,t){const o={questions:[],truefalse:[],pairs:[],order:[]};return i.querySelectorAll(".item").forEach(n=>{if(!n.querySelector(":scope > input").checked)return;const c=n.dataset.kind,p=Number(n.dataset.i),e=a=>n.querySelector(`[data-f="${a}"]`)?.innerText.trim()??"";if(c==="questions"){const a=t.questions[p],r=Number(n.querySelector("input[type=radio]:checked")?.value??a.correct);o.questions.push({...a,q:e("q"),answers:a.answers.map((d,u)=>e(`a${u}`)),correct:r,why:e("why")})}else if(c==="truefalse"){const a=t.truefalse[p];o.truefalse.push({...a,s:e("s"),true:n.querySelector('[data-f="true"]').checked,why:e("why")})}else c==="pairs"?o.pairs.push({...t.pairs[p],title:e("title")}):o.order.push({...t.order[p],title:e("title")})}),o}export{v as showReview};
