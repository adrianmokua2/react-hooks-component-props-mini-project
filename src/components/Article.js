

export default function Article({ title, date,preview}) {
  return (
    <div className="articles">
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </div>
  )
}
