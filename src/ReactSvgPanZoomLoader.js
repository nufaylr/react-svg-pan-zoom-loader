import React from 'react'
import PropTypes from 'prop-types'
import { SvgLoader } from 'react-svgmt'

/**
 * Loading the svg file using react-svgmt
 * @param props
 * @returns {*}
 * @constructor
 */
const ReactSvgPanZoomLoader = (props) => {
    return (
        <div>
            {props.render(
                <SvgLoader path={props.src} svgXML={props.svgXML}>
                    {props.proxy}
                </SvgLoader>
            )}
        </div>
    )
}

ReactSvgPanZoomLoader.defaultProps = {
    proxy: ""
}

ReactSvgPanZoomLoader.propTypes = {
    src: PropTypes.string,
    svgXML: PropTypes.string,
    render: PropTypes.func.isRequired,
    proxy: PropTypes.node
}

export {ReactSvgPanZoomLoader}
