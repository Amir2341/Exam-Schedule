import { useState } from "react";
import { GoogleMapsProvider } from "@ubilabs/google-maps-react-hooks";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Skeleton } from "@mui/material";
import type { Item } from "../../interfaces";

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/examschedule");
  const data = await res.json();

  const paths = data.map((item: Item) => ({
    params: { id: item.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }: any) => {
  const res = await fetch(
    `http://localhost:3000/api/examschedule/${params.id}`
  );
  const data = await res.json();

  return {
    props: { item: data },
  };
};

export default function ExamDetails({ item }: any) {
  const mapOptions = {
    zoom: 12,
    center: {
      lat: item.Latitude,
      lng: item.Longitude,
    },
  };

  const [mapContainer, setMapContainer] = useState(null);

  return (
    <div className="flex flex-col gap-10 p-10 justify-center items-center">
      <div>
        {item ? (
          <Card sx={{ maxWidth: 500 }}>
            <CardMedia>
              <GoogleMapsProvider
                googleMapsAPIKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
                mapOptions={mapOptions}
                mapContainer={mapContainer}
              >
                <div
                  ref={(node) => setMapContainer(node)}
                  style={{ height: "70vh" }}
                />
              </GoogleMapsProvider>
            </CardMedia>

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Exam Details
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.Description} | Date : {item.Date} | Candidate ID :{" "}
                {item.Candidateid} | Candidate Name : {item.CandidateName} |
                Location : {item.LocationName} | Latitude : {item.Latitude} |
                Longitude : {item.Longitude}
              </Typography>
            </CardContent>
          </Card>
        ) : (
          <Skeleton
            animation="wave"
            variant="circular"
            width={40}
            height={40}
          />
        )}
      </div>
    </div>
  );
}
