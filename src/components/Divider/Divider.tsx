import React from "react"

type DividerProps = {
  top?: number
  bottom?: number
  height?: number
}

const Divider: React.FC<DividerProps> = ({
  top = 4,
  bottom = 4,
  height = 1
}) => {
  return (
    <div
      style={{
        width: "100%",
        height: 1,
        borderTop: `${height}px solid #E8E9EF`,
        marginTop: top,
        marginBottom: bottom
      }}
    />
  )
}

export default Divider
