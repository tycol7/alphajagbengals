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
    },
    caption: {
        showCaption: false
    }
};

function ShowGallery(props) {
    const activeGallery = props.activeGallery;
    const data = props.data;
    if(activeGallery === "kittens") {
        return (
                <SRLWrapper options={options}>
            {data.kittens.edges.map(edge => {
                return <Img key={edge.node.id} fluid={edge.node.childImageSharp.fluid} alt="Kitten" />
            })}
                </SRLWrapper>
        );
    } else if(activeGallery === "kings") {
        return (
                <SRLWrapper options={options}>
            {data.kings.edges.map(edge => {
                return <Img key={edge.node.id} fluid={edge.node.childImageSharp.fluid} alt="King" />
            })}
            </SRLWrapper>
        );
    } else {
        return (
                <SRLWrapper options={options}>
            {data.queens.edges.map(edge => {
                return <Img key={edge.node.id} fluid={edge.node.childImageSharp.fluid} alt="Queen" />
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
                    kittens: allFile(sort: { fields: birthTime, order: DESC },
                        filter: {relativeDirectory: { eq: "gallery/kittens" }}) {
                        edges {
                            node {
                                id
                                childImageSharp {
                                    fluid(maxWidth: 1000) {
                                        ...GatsbyImageSharpFluid_noBase64
                                    }
                                }
                            }
                        }
                    }
                    kings: allFile(sort: { fields: birthTime, order: DESC },
                        filter: {relativeDirectory: { eq: "gallery/kings" }}) {
                        edges {
                            node {
                                id
                                childImageSharp {
                                    fluid(maxWidth: 1000) {
                                        ...GatsbyImageSharpFluid_noBase64
                                    }
                                }
                            }
                        }
                    }
                    queens: allFile(sort: { fields: birthTime, order: DESC },
                        filter: {relativeDirectory: { eq: "gallery/queens" }}) {
                        edges {
                            node {
                                id
                                childImageSharp {
                                    fluid(maxWidth: 1000) {
                                        ...GatsbyImageSharpFluid_noBase64
                                    }
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

