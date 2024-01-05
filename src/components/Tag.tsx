type TagPropTypes = {
    text: string,
    color: string
}

const Tag = ({ text, color }: TagPropTypes) => {
    return (
        <div className="tag" style={{ backgroundColor: color }}>
            {text}
        </div>
    )
}

export default Tag;