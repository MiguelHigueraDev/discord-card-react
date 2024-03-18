const SectionTitle = ({title, marginBottom}: {title: string, marginBottom?: number}) => {
  return (
    <h3 className="uppercase text-sm font-semibold mb-0.5" style={{marginBottom: marginBottom}}>{title}</h3>
  )
}

export default SectionTitle