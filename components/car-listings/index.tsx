import React from "react";
import Image from "next/image";
import { proplistings } from "../../interfaces/index";

export default function Listings(props: proplistings) {
    console.log(props.data);
    return (
        <div>
            {props.data.records ? (
                props.data.records.map((car: any) => (
                    <div key={car.id}>
                        <h3>
                            {car.make}
                            {car.model}
                            {car.year}
                        </h3>
                        <Image src={car.thumbnailUrl} alt={car.make} width={100} height={100} />
                        <a href={car.clickoffUrl}>External Link</a>
                        <p>{car.price}</p>
                        <p>{car.mileage}</p>
                        <p>
                            {car.state}, {car.city}
                        </p>
                    </div>
                ))
            ) : (
                <div>no cars available</div>
            )}
        </div>
    );
}
