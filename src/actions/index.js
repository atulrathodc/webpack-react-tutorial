let nextTodoId = 0
export const increment = text => ({
  type: 'increment',
  payload: nextTodoId++,

})
export const add = text => ({
  type: 'add',
  text
})
export const toggle = textkey => ({
  type: 'toggle',
  textkey
})


