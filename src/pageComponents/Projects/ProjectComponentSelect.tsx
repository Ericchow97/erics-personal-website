interface IProps {
  img: string,
  alt: string
}

export const ProjectComponentSelect = ({ img, alt }: IProps) => {
  return (
    <>
      <img
        src={img}
        alt={alt}
        className={'project-select-img'}
      ></img>
    </>
  )
}