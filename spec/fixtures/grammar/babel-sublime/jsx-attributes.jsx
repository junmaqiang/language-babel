// SYNTAX TEST "source.js.jsx"
//
// GOOD JSX
//
<div className key>
// <- meta.tag.jsx punctuation.definition.tag.jsx
 // <- meta.tag.jsx entity.name.tag.open.jsx
//^^ ^^^^^^^^^ ^^^^  meta.tag.jsx
//                ^  punctuation.definition.tag.jsx
//^^                 entity.name.tag.open.jsx
//   ^^^^^^^^^ ^^^   entity.other.attribute-name.jsx
//                ^  JSXStartTagEnd
<div /*cats*/ className /*dogs*/ key>
// <- meta.tag.jsx punctuation.definition.tag.jsx
 // <- meta.tag.jsx entity.name.tag.open.jsx
//^^ ^^^^^^^^ ^^^^^^^^^ ^^^^^^^^ ^^^^  meta.tag.jsx
//                                  ^  punctuation.definition.tag.jsx
//^^                                   entity.name.tag.open.jsx
//   ^^^^^^^^           ^^^^^^^^       comment.block.js
//   ^^    ^^           ^^    ^^       punctuation.definition.comment.js
//            ^^^^^^^^^          ^^^   entity.other.attribute-name.jsx
//                                  ^  JSXStartTagEnd
<div /*cats*/className/*dogs*/ key>
// <- meta.tag.jsx punctuation.definition.tag.jsx
 // <- meta.tag.jsx entity.name.tag.open.jsx
//^^ ^^^^^^^^^^^^^^^^^^^^^^^^^ ^^^^  meta.tag.jsx
//                                ^  punctuation.definition.tag.jsx
//^^                                 entity.name.tag.open.jsx
//   ^^^^^^^^         ^^^^^^^^       comment.block.js
//   ^^    ^^         ^^    ^^       punctuation.definition.comment.js
//                             ^^^   entity.other.attribute-name.jsx
//                                ^  JSXStartTagEnd
<div
// <- meta.tag.jsx punctuation.definition.tag.jsx
 // <- meta.tag.jsx entity.name.tag.open.jsx
//^^  meta.tag.jsx
//^^  entity.name.tag.open.jsx
  /*cats*/className // dogs
//^^^^^^^^^^^^^^^^^ ^^ ^^^^  meta.tag.jsx
//^^^^^^^^                   comment.block.js
//^^    ^^          ^^       punctuation.definition.comment.js
//                  ^^ ^^^^  comment.line.double-slash.js
  // more cats
//^^ ^^^^ ^^^^  meta.tag.jsx
//^^ ^^^^ ^^^^  comment.line.double-slash.js
//^^            punctuation.definition.comment.js
  />
//^^  meta.tag.jsx
//^^  punctuation.definition.tag.jsx
<div className='MyClass' key>
// <- meta.tag.jsx punctuation.definition.tag.jsx
 // <- meta.tag.jsx entity.name.tag.open.jsx
//^^ ^^^^^^^^^^^^^^^^^^^ ^^^^  meta.tag.jsx
//                          ^  punctuation.definition.tag.jsx
//^^                           entity.name.tag.open.jsx
//   ^^^^^^^^^           ^^^   entity.other.attribute-name.jsx
//            ^                keyword.operator.assignment.jsx
//             ^^^^^^^^^       string.quoted.single.js
//             ^               punctuation.definition.string.begin.jsx
//                     ^       punctuation.definition.string.end.jsx
//                          ^  JSXStartTagEnd
<div className='MyClass' key={1} >
// <- meta.tag.jsx punctuation.definition.tag.jsx
 // <- meta.tag.jsx entity.name.tag.open.jsx
//^^ ^^^^^^^^^^^^^^^^^^^ ^^^^^^^ ^  meta.tag.jsx
//                               ^  punctuation.definition.tag.jsx
//^^                                entity.name.tag.open.jsx
//   ^^^^^^^^^           ^^^        entity.other.attribute-name.jsx
//            ^             ^       keyword.operator.assignment.jsx
//             ^^^^^^^^^            string.quoted.single.js
//             ^                    punctuation.definition.string.begin.jsx
//                     ^            punctuation.definition.string.end.jsx
//                           ^^^    meta.embedded.expression.js
//                           ^      punctuation.section.embedded.begin.jsx
//                            ^     constant.numeric.js
//                             ^    punctuation.section.embedded.end.jsx
//                               ^  JSXStartTagEnd
<div className='MyClass' key={1} />
// <- meta.tag.jsx punctuation.definition.tag.jsx
 // <- meta.tag.jsx entity.name.tag.open.jsx
//^^ ^^^^^^^^^^^^^^^^^^^ ^^^^^^^ ^^  meta.tag.jsx
//                               ^^  punctuation.definition.tag.jsx
//^^                                 entity.name.tag.open.jsx
//   ^^^^^^^^^           ^^^         entity.other.attribute-name.jsx
//            ^             ^        keyword.operator.assignment.jsx
//             ^^^^^^^^^             string.quoted.single.js
//             ^                     punctuation.definition.string.begin.jsx
//                     ^             punctuation.definition.string.end.jsx
//                           ^^^     meta.embedded.expression.js
//                           ^       punctuation.section.embedded.begin.jsx
//                            ^      constant.numeric.js
//                             ^     punctuation.section.embedded.end.jsx
<div className = 'MyClass' key={1} />
// <- meta.tag.jsx punctuation.definition.tag.jsx
 // <- meta.tag.jsx entity.name.tag.open.jsx
//^^ ^^^^^^^^^ ^ ^^^^^^^^^ ^^^^^^^ ^^  meta.tag.jsx
//                                 ^^  punctuation.definition.tag.jsx
//^^                                   entity.name.tag.open.jsx
//   ^^^^^^^^^             ^^^         entity.other.attribute-name.jsx
//             ^              ^        keyword.operator.assignment.jsx
//               ^^^^^^^^^             string.quoted.single.js
//               ^                     punctuation.definition.string.begin.jsx
//                       ^             punctuation.definition.string.end.jsx
//                             ^^^     meta.embedded.expression.js
//                             ^       punctuation.section.embedded.begin.jsx
//                              ^      constant.numeric.js
//                               ^     punctuation.section.embedded.end.jsx
<div className = 'MyClass' key={() => this.setState({})} />
// <- meta.tag.jsx punctuation.definition.tag.jsx
 // <- meta.tag.jsx entity.name.tag.open.jsx
//^^ ^^^^^^^^^ ^ ^^^^^^^^^ ^^^^^^^ ^^ ^^^^^^^^^^^^^^^^^^ ^^  meta.tag.jsx
//                                                       ^^  punctuation.definition.tag.jsx
//^^                                                         entity.name.tag.open.jsx
//   ^^^^^^^^^             ^^^                               entity.other.attribute-name.jsx
//             ^              ^                              keyword.operator.assignment.jsx
//               ^^^^^^^^^                                   string.quoted.single.js
//               ^                                           punctuation.definition.string.begin.jsx
//                       ^                                   punctuation.definition.string.end.jsx
//                             ^^^ ^^ ^^^^^^^^^^^^^^^^^^     meta.embedded.expression.js
//                             ^                             punctuation.section.embedded.begin.jsx
//                              ^^ ^^                        meta.function.arrow.js
//                              ^                            punctuation.definition.parameters.begin.js
//                               ^                           punctuation.definition.parameters.end.js
//                                 ^^                        storage.type.function.arrow.js
//                                    ^^^^                   variable.language.this.js
//                                        ^                  keyword.operator.accessor.js
//                                         ^^^^^^^^          meta.function-call.method.with-arguments.js
//                                         ^^^^^^^^          entity.name.function.js
//                                                 ^^^^      meta.group.braces.round
//                                                 ^  ^      meta.brace.round.js
//                                                  ^^       meta.group.braces.curly
//                                                  ^^       meta.brace.curly.js
//                                                     ^     punctuation.section.embedded.end.jsx
<div class-Name= 'MyClass' key />
// <- meta.tag.jsx punctuation.definition.tag.jsx
 // <- meta.tag.jsx entity.name.tag.open.jsx
//^^ ^^^^^^^^^^^ ^^^^^^^^^ ^^^ ^^  meta.tag.jsx
//                             ^^  punctuation.definition.tag.jsx
//^^                               entity.name.tag.open.jsx
//   ^^^^^^^^^^            ^^^     entity.other.attribute-name.jsx
//             ^                   keyword.operator.assignment.jsx
//               ^^^^^^^^^         string.quoted.single.js
//               ^                 punctuation.definition.string.begin.jsx
//                       ^         punctuation.definition.string.end.jsx
<div className= 'MyClass' key =  '' />
// <- meta.tag.jsx punctuation.definition.tag.jsx
 // <- meta.tag.jsx entity.name.tag.open.jsx
//^^ ^^^^^^^^^^ ^^^^^^^^^ ^^^ ^  ^^ ^^  meta.tag.jsx
//                                  ^^  punctuation.definition.tag.jsx
//^^                                    entity.name.tag.open.jsx
//   ^^^^^^^^^            ^^^           entity.other.attribute-name.jsx
//            ^               ^         keyword.operator.assignment.jsx
//              ^^^^^^^^^        ^^     string.quoted.single.js
//              ^                ^      punctuation.definition.string.begin.jsx
//                      ^         ^     punctuation.definition.string.end.jsx
<div className = 'MyClass'
// <- meta.tag.jsx punctuation.definition.tag.jsx
 // <- meta.tag.jsx entity.name.tag.open.jsx
//^^ ^^^^^^^^^ ^ ^^^^^^^^^  meta.tag.jsx
//^^                        entity.name.tag.open.jsx
//   ^^^^^^^^^              entity.other.attribute-name.jsx
//             ^            keyword.operator.assignment.jsx
//               ^^^^^^^^^  string.quoted.single.js
//               ^          punctuation.definition.string.begin.jsx
//                       ^  punctuation.definition.string.end.jsx
  key={1} />
//^^^^^^^ ^^  meta.tag.jsx
//^^^         entity.other.attribute-name.jsx
//   ^        keyword.operator.assignment.jsx
//    ^^^     meta.embedded.expression.js
//    ^       punctuation.section.embedded.begin.jsx
//     ^      constant.numeric.js
//      ^     punctuation.section.embedded.end.jsx
//        ^^  punctuation.definition.tag.jsx
<div
// <- meta.tag.jsx punctuation.definition.tag.jsx
 // <- meta.tag.jsx entity.name.tag.open.jsx
//^^  meta.tag.jsx
//^^  entity.name.tag.open.jsx
  className = 'MyClass'
//^^^^^^^^^ ^ ^^^^^^^^^  meta.tag.jsx
//^^^^^^^^^              entity.other.attribute-name.jsx
//          ^            keyword.operator.assignment.jsx
//            ^^^^^^^^^  string.quoted.single.js
//            ^          punctuation.definition.string.begin.jsx
//                    ^  punctuation.definition.string.end.jsx
  key={1} />
//^^^^^^^ ^^  meta.tag.jsx
//^^^         entity.other.attribute-name.jsx
//   ^        keyword.operator.assignment.jsx
//    ^^^     meta.embedded.expression.js
//    ^       punctuation.section.embedded.begin.jsx
//     ^      constant.numeric.js
//      ^     punctuation.section.embedded.end.jsx
//        ^^  punctuation.definition.tag.jsx
<div className
// <- meta.tag.jsx punctuation.definition.tag.jsx
 // <- meta.tag.jsx entity.name.tag.open.jsx
//^^ ^^^^^^^^^  meta.tag.jsx
//^^            entity.name.tag.open.jsx
//   ^^^^^^^^^  entity.other.attribute-name.jsx
  = 'MyClass' key={1} />
//^ ^^^^^^^^^ ^^^^^^^ ^^  meta.tag.jsx
//^              ^        keyword.operator.assignment.jsx
//  ^^^^^^^^^             string.quoted.single.js
//  ^                     punctuation.definition.string.begin.jsx
//          ^             punctuation.definition.string.end.jsx
//            ^^^         entity.other.attribute-name.jsx
//                ^^^     meta.embedded.expression.js
//                ^       punctuation.section.embedded.begin.jsx
//                 ^      constant.numeric.js
//                  ^     punctuation.section.embedded.end.jsx
//                    ^^  punctuation.definition.tag.jsx
<div className
// <- meta.tag.jsx punctuation.definition.tag.jsx
 // <- meta.tag.jsx entity.name.tag.open.jsx
//^^ ^^^^^^^^^  meta.tag.jsx
//^^            entity.name.tag.open.jsx
//   ^^^^^^^^^  entity.other.attribute-name.jsx
  =
//^  meta.tag.jsx
//^  keyword.operator.assignment.jsx
  'MyClass' key={1} />
//^^^^^^^^^ ^^^^^^^ ^^  meta.tag.jsx
//^^^^^^^^^             string.quoted.single.js
//^                     punctuation.definition.string.begin.jsx
//        ^             punctuation.definition.string.end.jsx
//          ^^^         entity.other.attribute-name.jsx
//             ^        keyword.operator.assignment.jsx
//              ^^^     meta.embedded.expression.js
//              ^       punctuation.section.embedded.begin.jsx
//               ^      constant.numeric.js
//                ^     punctuation.section.embedded.end.jsx
//                  ^^  punctuation.definition.tag.jsx
<div className/*cats*/= 'MyClass' key />
// <- meta.tag.jsx punctuation.definition.tag.jsx
 // <- meta.tag.jsx entity.name.tag.open.jsx
//^^ ^^^^^^^^^^^^^^^^^^ ^^^^^^^^^ ^^^ ^^  meta.tag.jsx
//                                    ^^  punctuation.definition.tag.jsx
//^^                                      entity.name.tag.open.jsx
//   ^^^^^^^^^                    ^^^     entity.other.attribute-name.jsx
//            ^^^^^^^^                    comment.block.js
//            ^^    ^^                    punctuation.definition.comment.js
//                    ^                   keyword.operator.assignment.jsx
//                      ^^^^^^^^^         string.quoted.single.js
//                      ^                 punctuation.definition.string.begin.jsx
//                              ^         punctuation.definition.string.end.jsx
<div className=/*dogs*/'MyClass' key />
// <- meta.tag.jsx punctuation.definition.tag.jsx
 // <- meta.tag.jsx entity.name.tag.open.jsx
//^^ ^^^^^^^^^^^^^^^^^^^^^^^^^^^ ^^^ ^^  meta.tag.jsx
//                                   ^^  punctuation.definition.tag.jsx
//^^                                     entity.name.tag.open.jsx
//   ^^^^^^^^^                   ^^^     entity.other.attribute-name.jsx
//            ^                          keyword.operator.assignment.jsx
//             ^^^^^^^^                  comment.block.js
//             ^^    ^^                  punctuation.definition.comment.js
//                     ^^^^^^^^^         string.quoted.single.js
//                     ^                 punctuation.definition.string.begin.jsx
//                             ^         punctuation.definition.string.end.jsx
<div className/*cats*/=/*dogs*/'MyClass' key />
// <- meta.tag.jsx punctuation.definition.tag.jsx
 // <- meta.tag.jsx entity.name.tag.open.jsx
//^^ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ^^^ ^^  meta.tag.jsx
//                                           ^^  punctuation.definition.tag.jsx
//^^                                             entity.name.tag.open.jsx
//   ^^^^^^^^^                           ^^^     entity.other.attribute-name.jsx
//            ^^^^^^^^ ^^^^^^^^                  comment.block.js
//            ^^    ^^ ^^    ^^                  punctuation.definition.comment.js
//                    ^                          keyword.operator.assignment.jsx
//                             ^^^^^^^^^         string.quoted.single.js
//                             ^                 punctuation.definition.string.begin.jsx
//                                     ^         punctuation.definition.string.end.jsx

//
// BAD JSX
//
<div className='MyClass' key / x>
<div className? />
<div className? = 'MyClass' key={1} />
<div .className= 'MyClass' key={1} />
<div clas#sName= 'MyClass' key />
<div class:Name ='MyClass' key />
<div className 'MyClass' key />
<div
  key
  {1} />
<div className= 'MyClass' key=cats />
<div className= 'MyClass' key==cats />
<div className= 'MyClass' key== cats />
<div className= 'MyClass' key=
cats />
<div className='MyClass' = 'cats' key= >
<div = key= >
<div
  =
  key= >
<div
  key
  = >
<div
  'asdasd'>
<div < >
< >
<div className 'MyClass' key=cats />
<div className= 'MyClass' key=cats
