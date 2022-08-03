// 类型声明文件  .d.ts只提供类型信息  为js文件提供类型信息
// .d.ts 是implementation (代码实现文件) .d.ts 是declaration (类型声明文件)

import { type } from "os"

// 接口
export interface ApiRes<T>{
    code:string
    msg:string
    result:T
}
export type CategoryItem={
    id:string
    name:string
    picture:string
}
// Partial变为可选的字段
 export type PartialCate=Partial<CategoryItem>

//readonly 变为只读数据类型
export type ReadonlyCate=Readonly<CategoryItem>
//pick取其他类型中的部分数据作为新的类型
export type PickCate=Pick<CategoryItem,'id'|'name'>
//record 构建相同的类型   键          值
type RecordObj=Record<'a'|'b'|'c',string[]>

// js中{}的键是string类型
interface anyObject{
    [key:string]:number
}

// 映射类型  根据已有类型创建新的对象类型
type PropKeys='x'|'y'|'z'|'a'|'b'
type Type1={[key in PropKeys]:number}
// keyof 可以获取对象类型props中所有键的联合类型
// key in 表示key可以是props中所有键名称中的一个
type Props={a:number;b:string;c:boolean}
type Type3={[key in keyof Props]:number}

// 索引查询类型
type Propsarr={a:number;b:string,c:boolean}
type typeA=Props['a']
// 模拟partial类型   利用查询 T[p]
type MyPartial<T>={[p in keyof T]?:T[p]}

//索引查询同时查询多个
type TypeA=Propsarr['a'|'b']
type TypeB=Propsarr[keyof Propsarr]


