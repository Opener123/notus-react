import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class SimpleMap extends Component {
    static defaultProps = {
        center: { lat: 59.95, lng: 30.33 },
        zoom: 11
    };

    render() {
        const handleApiLoaded = (map, maps) => {
            // use map and maps objects
        };

        return (
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyBHNn3k7bp2l8J3vxDmQUcaZr6ySM0uryA" }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
            >
                <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                />
            </GoogleMapReact>
        );
    }
}