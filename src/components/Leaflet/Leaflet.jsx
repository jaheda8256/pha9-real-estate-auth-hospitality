import GoogleMapReact from 'google-map-react';
import { googleAPIKey } from './googleAPIKey';
import { FaMapMarkerAlt } from "react-icons/fa";


const AnyReactComponent = ({ text }) => <div style={{color: "red"}}><FaMapMarkerAlt></FaMapMarkerAlt></div>;
const Leaflet = () => {

    const defaultProps = {
        center: {
          lat: 23.8041,
          lng: 90.4152
        },
        zoom: 14
      };
    return (
        <div className='my-20'>
            
            <div style={{ height: '500px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: googleAPIKey }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={defaultProps.center.lat}
          lng={defaultProps.center.lng}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
        </div>
    );
};

export default Leaflet;