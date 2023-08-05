export const handleToggle = (
  data,
  setToggle,
  toggle,
  instruction,
  countSpace = 20
) => {
  if (data.status === 'success') {
    if (data.data.previous && instruction === 'prev') {
      setToggle(toggle - countSpace)
    } else if (data.data.next && instruction === 'next') {
      setToggle(toggle + countSpace)
    }
  }
}
