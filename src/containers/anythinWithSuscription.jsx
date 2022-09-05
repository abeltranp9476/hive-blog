import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'

export const anythinWithSuscription = (ComposedComponent, dataSource) => {
    const { slug } = useParams()

    const EnhancedComponent = ({ slug }) => {
        const [data, setData] = useState([]);
        const [isLoading, setIsLoading] = useState(true)
        const [is404, setIs404] = useState(false);

        const getData = async (slug) => {
            const content = await dataSource(slug)
            if (content.data.result) {
                setData(content.data.result)
            } else {
                setData(content.data)
            }
        }

        useEffect(() => {
            console.log(slug)
            getData(slug)
        }, [slug])

        useEffect(() => {
            if (data?.title) {
                setIsLoading(false)
                document.title = data?.title
            } else if (data?.error?.code) {
                setIsLoading(false)
                setIs404(true)
            }
        }, [data])

        return (props) => <ComposedComponent
            {...props}
            isLoading={isLoading}
            is404={is404}
            post={data}
        />
    }

    return <EnhancedComponent slug={slug} />
}

anythinWithSuscription.propTypes = {}