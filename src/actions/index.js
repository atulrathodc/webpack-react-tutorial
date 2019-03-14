let nextTodoId = 0
export const increment = text => ({
  type: 'increment',
  payload: nextTodoId++,

})
export const submit = text => ({
  type: 'submit',
  text
})


