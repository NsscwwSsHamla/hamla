  if(!data.length){
    tb.innerHTML='<tr><td colspan="9" style="text-align:center;padding:30px;color:var(--g6)">لا توجد معدات مسجلة بعد</td></tr>';
    if(vc)vc.textContent='الإجمالي: 0';return;
  }
  const sorted=[...data].sort((a,b)=>{
    const ai=clsOrd.indexOf(a['التصنيف']);const bi=clsOrd.indexOf(b['التصنيف']);
    return(ai===-1?99:ai)-(bi===-1?99:bi);
  });
  tb.innerHTML=sorted.map((e,i)=>`<tr onclick="openVD('${e['ID']}')" style="cursor:pointer">
    <td>${i+1}</td>
    <td style="font-weight:900;font-size:13px">${getPlate(e)}</td>
    <td>${e['الماركة']||'-'}</td>
    <td style="font-size:11px">${e['الوظيفة']||'-'}</td