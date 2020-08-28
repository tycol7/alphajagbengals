import React from "react"
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { SRLWrapper } from "simple-react-lightbox";

const options = {
    buttons: {
        showAutoplayButton: false,
        showDownloadButton: false,
        showFullscreenButton: false,
        showThumbnailsButton: false
    }
};

function ShowGallery(props) {
    const activeGallery = props.activeGallery;
    const data = props.data;
    if(activeGallery === "kittens") {
        return (
                <SRLWrapper options={options}>
            {data.kittens.images.map(image => {
                return <Img key={image._key} fluid={image.asset.fluid} alt={image.caption} />
            })}
                </SRLWrapper>
        );
    } else if(activeGallery === "kings") {
        return (
                <SRLWrapper options={options}>
            {data.kings.images.map(image => {
                return <Img key={image._key} fluid={image.asset.fluid} alt={image.caption} />
            })}
            </SRLWrapper>
        );
    } else {
        return (
                <SRLWrapper options={options}>
            {data.queens.images.map(image => {
                return <Img key={image._key} fluid={image.asset.fluid} alt={image.caption} />
            })}
            </SRLWrapper>
        );
    } 
}

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.handleGalleryChange = this.handleGalleryChange.bind(this);
        this.state = {activeGallery: "kittens"};
    }

    handleGalleryChange(value) {
        this.setState((state) => {
            return {activeGallery: value}
        });
    }

    getActiveGallery() {
        return this.state.activeGallery;
    }

    render() {
        return (
            <StaticQuery
            query={graphql`
                query{
                    kittens: sanityGallery(name: {eq: "Kittens"}) {
                        images {
                          _key
                          caption
                          asset {
                              fluid(maxWidth: 1000) {
                                ...GatsbySanityImageFluid_noBase64
                              }
                           }
                        }
                    }
                    kings: sanityGallery(name: {eq: "Kings"}) {
                        images {
                          _key
                          caption
                          asset {
                              fluid(maxWidth: 1000) {
                                ...GatsbySanityImageFluid_noBase64
                              }
                           }
                        }
                    }
                    queens: sanityGallery(name: {eq: "Queens"}) {
                        images {
                          _key
                          caption
                          asset {
                              fluid(maxWidth: 1000) {
                                ...GatsbySanityImageFluid_noBase64
                              }
                           }
                        }
                    }
                }
            `}
            render={data => (
                <>
                <div className="gallery-nav-container">
                    <h2>Photos</h2>
                    <div className="gallery-nav">
                        <a href="#photos" className={this.state.activeGallery === "kittens" ? "active" : ""} onClick={() => this.handleGalleryChange('kittens')}>Kittens</a>
                        <a href="#photos" className={this.state.activeGallery === "kings" ? "active" : ""} onClick={() => this.handleGalleryChange('kings')}>Kings</a>
                        <a href="#photos" className={this.state.activeGallery === "queens" ? "active" : ""} onClick={() => this.handleGalleryChange('queens')}>Queens</a>
                    </div>
                </div>
                <div className="gallery">
                <ShowGallery activeGallery={this.state.activeGallery} data={data} />
                </div>
                </>
            )}
            />
        )
    }
}

export default Gallery

