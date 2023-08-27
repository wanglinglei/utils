import { Project, SyntaxKind } from "ts-morph";
import fs from "fs";
import { dir } from "console";
const project = new Project();
const ignoreFiles= ['http.ts','reactHook.ts']
 const allDirs=fs.readdirSync('./packages')
const dirs=allDirs.filter(dir=>!ignoreFiles.includes(dir))
console.log('Dirs:', dirs);

const paths=dirs.map(dir=>{
  return `./packages/${dir}`
})

project.addSourceFilesAtPaths(paths)

const sourceFiles = project.getSourceFiles();

// 获取所有函数名
const functionNames = sourceFiles.flatMap((sourceFile) => {

  const fileName=sourceFile.getBaseName();
  const functions = sourceFile.getFunctions();
  const functionInfoList = functions.map((functionDecl) => {
    const paramsType = functionDecl.getParameters().map((p) => `${p.getName()}: ${p.getType().getText()}`).join(", ").replace(/\|/g,'/');
    const returnType = functionDecl.getReturnTypeNode() ? `${functionDecl.getReturnTypeNode()?.getText()}` : "--";
    console.log('function',paramsType,returnType);
    return {
      functionName: functionDecl.getName(),
      functionDesc: functionDecl.compilerNode.jsDoc[0].tags[0].comment.replace(':',''),
      paramsType,
      returnType
    }
  })
  return {
    fileName,
    functionInfoList
  }
});

const mdFile =fs.readFileSync('./template/index.md', 'utf8');
fs.writeFileSync('./README.md',mdFile);
function generateMdString(){
  let string='\n### 工具函数列表';
  functionNames.forEach(item=>{
    const {fileName,functionInfoList}=item;
    string+=`\n#### ${fileName} \n | 函数名 | 函数描述|入参|返回值| \n |:----:|:----|:----:|:----:|`
    functionInfoList.forEach(functionItem=>{
      string+=`\n|${functionItem.functionName}|${functionItem.functionDesc}|${functionItem.paramsType}|${functionItem.returnType}|`
    })
  })
  string += '\n'
  return string
}

const mdString =generateMdString()

fs.appendFileSync('./README.md',mdString)