import { assert } from "console";

export function parseTransform(transform: string){
  const [kind, argstr] = transform.split("(").slice(0,2).map(x=>x.replace(")","").trim()); //?
  return parseTransformAsMatrix(kind, 
    argstr.split(/[,\s]/gim).map(x=>{ try{ return Number(x) } catch(err){ console.log(err); }})
  );
}

export function parseTransformAsMatrix(kind: string, args: Array<string|number>){
  switch(kind){
    case "translate": {
      assert(args.length == 2);
      return [1, 0, 0, 1, args[0], args[1], 0, 0, 1]
    } break;
    default: break;
  }
}
parseTransform("translate(435.34 -.34)"); //?