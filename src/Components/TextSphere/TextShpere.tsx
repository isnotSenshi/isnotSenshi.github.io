import { CustomBox } from '../../Styles/customBox'
import { TEXT_SPHERE } from '../../Constants/components'
import { TagCloud } from "@frank-mayer/react-tag-cloud"
import { CONTEXT } from '../../App/context'
import { useContext, useState } from 'react'
import '../../Styles/textSphere/TextShpere.css'
import { CHANGE_SPHERE_BOX } from '../../Core/Types'
import { greenBoxText } from '../../utils/greenBoxText'
import { greenBoxImg } from '../../utils/greenBoxImg'

const TextShpere = () => {
  const [windowSize, setWindowSize] = useState(window.innerHeight / 8)
  const { dispatch } = useContext(CONTEXT)

  const changeGreenBox = (lang: string) => {
    dispatch({
      type: CHANGE_SPHERE_BOX,
      value: { text: greenBoxText(lang), icon: greenBoxImg(lang) }
    })
  }

  function reportWindowSize() {
    setWindowSize(window.innerHeight / 8)
  }
  window.onresize = reportWindowSize;

  return (
    <CustomBox {...TEXT_SPHERE.cloud}>
      <TagCloud
        style={{ width: '30vh' }}
        onClick={e => changeGreenBox(e)}
        options={{
          maxSpeed: "fast",
          initSpeed: "normal",
          keep: false,
          radius: windowSize
        }}>
        {TEXT_SPHERE.texts}
      </TagCloud>
    </CustomBox>
  )
}

export default TextShpere