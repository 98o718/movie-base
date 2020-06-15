import React, { useEffect, useState, useCallback, useRef } from 'react'
import useIntersectionObserver from '@react-hook/intersection-observer'
import { ImageWrapper, ImageLoader } from './Image.styles'
import { SyncLoader } from 'react-spinners'

type ImageProps = {
  src: string
} & React.ImgHTMLAttributes<HTMLImageElement>

const Img = ({ src, ...rest }: ImageProps) => {
  const [isLoading, setLoading] = useState(true)
  const [loaded, setLoaded] = useState(false)

  const imgRef = useRef<HTMLImageElement>(null)

  const observer = useIntersectionObserver(imgRef)

  const onLoad = useCallback(() => {
    setLoaded(true)
    if (imgRef.current !== null) {
      imgRef.current.src = src
    }
    setLoading(false)
  }, [src])

  const loadImage = useCallback(() => {
    setLoading(true)
    let i = new Image()

    i.src = src
    i.onload = onLoad
  }, [onLoad, src])

  useEffect(() => {
    if (observer.isIntersecting && !loaded) {
      loadImage()
    }
  }, [observer.isIntersecting, loadImage, loaded])

  return (
    <ImageWrapper style={{ height: '100%', width: '100%' }}>
      {isLoading && (
        <ImageLoader>
          <SyncLoader color="#28c7fa" />
        </ImageLoader>
      )}
      <img ref={imgRef} {...rest} alt={rest.alt} width="100%" />
    </ImageWrapper>
  )
}

export default Img
