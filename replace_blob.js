const fs=require('fs'),path=require('path');
function walk(d){
  let list=[];
  fs.readdirSync(d).forEach(f=>{
    let p=path.join(d,f);
    if(fs.statSync(p).isDirectory()) list.push(...walk(p));
    else if(f.endsWith('.tsx')) list.push(p);
  });
  return list;
}
let files=['app/components/Work.tsx', 'app/components/ProjectTemplate.tsx',...walk('app/work')];
files.forEach(file=>{
  let content=fs.readFileSync(file,'utf8');
  let before=content;
  content=content.replace(/blob\("([^"]+)"\)/g,'"$1"');
  content=content.replace(/import \{ blob \} from "@\/app\/lib\/blob";\r?\n/g,'');
  if(before!==content) fs.writeFileSync(file,content,'utf8');
});
console.log('done');
