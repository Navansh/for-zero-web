import React, { useEffect, useState } from "react";
import mailBox from "../../assets/cloud_mailbox.avif";
import family from "../../assets/cloud_family.avif";
import carImg from "../../assets/cloud_car.avif";
import plane from "../../assets/cloud_plane.avif";
import veggieImg from "../../assets/cloud_veggies.avif";
import houseImg from "../../assets/cloud_house.avif";
import dogImg from "../../assets/cloud_pet.avif";
import sofaImg from "../../assets/cloud_couch.avif";
import clothesImg from "../../assets/cloud_clothes.avif";
import supplies from "../../assets/cloud_supplies.avif";
import services from "../../assets/cloud_services.avif";
import electicity from "../../assets/cloud_battery.avif";
import renewables from "../../assets/cloud_renewables.avif";
import naturalGas from "../../assets/cloud_natural_gas.avif";
import Part1 from "./Form/Part1";
import Part4 from "./Form/Part4";
import Part5 from "./Form/Part5";
import Part6 from "./Form/Part6";
import Part7 from "./Form/Part7";
import Part2 from "./Form/Part2";
import Part3 from "./Form/Part3";
import Part8 from "./Form/Part8";
import Part10 from "./Form/Part10";
import Part11 from "./Form/Part11";
import Part12 from "./Form/Part12";
import Part13 from "./Form/Part13";
import Part14 from "./Form/Part14";
const Section1 = () => {
  const [cars, setCars] = useState();
  const [displayVal, setDisplayVal] = useState(13);
  const [formResponse, setFormResponse] = useState({
    pincode: null,
    household: null,
    cars: [],
    short_flight: null,
    long_flight: null,
    diet: null,
    home_size: null,
  });
  const [form, setForm] = useState([
    <Part1 setDisplayVal={setDisplayVal} displayVal={displayVal} />,
    <Part2 setDisplayVal={setDisplayVal} displayVal={displayVal} />,
    <Part3
      setCars={setCars}
      setDisplayVal={setDisplayVal}
      displayVal={displayVal}
    />,
    <Part4 setDisplayVal={setDisplayVal} displayVal={displayVal} />,
    <Part5 setDisplayVal={setDisplayVal} displayVal={displayVal} />,
    <Part6 setDisplayVal={setDisplayVal} displayVal={displayVal} />,
    <Part7 setDisplayVal={setDisplayVal} displayVal={displayVal} />,
    <Part8 setDisplayVal={setDisplayVal} displayVal={displayVal} />,
    <Part10 setDisplayVal={setDisplayVal} displayVal={displayVal} />,
    <Part10 />,
    <Part11 setDisplayVal={setDisplayVal} displayVal={displayVal} />,
    <Part12 setDisplayVal={setDisplayVal} displayVal={displayVal} />,
    <Part13 setDisplayVal={setDisplayVal} displayVal={displayVal} />,
    <Part14 setDisplayVal={setDisplayVal} displayVal={displayVal} />,
  ]);

  useEffect(() => {
    const c = [];
    for (let i = 0; i < cars; i++) {
      c.push({ type: null, miles_driven: null, miles_perweek: null });
    }
    const d = { ...formResponse, cars: c };
    setFormResponse(d);
  }, [cars]);
  return (
    <div className='calc-full'>
      <div className='side-icons-inner'>
        <div className={`side-icon ${displayVal == 0 ? "normal" : null}`}>
          <img src={mailBox} alt='' />
          <h2>Zipcode</h2>
        </div>
        <div className={`side-icon ${displayVal == 1 ? "normal" : null}`}>
          <img src={family} alt='' />
          <h2>Household</h2>
        </div>
        <div className={`side-icon ${displayVal == 2 ? "normal" : null}`}>
          <img src={carImg} alt='' />
          <h2>Cars</h2>
        </div>
        {formResponse.cars.map((car, index) => {
          return (
            <div className='side-icon'>
              <img src={carImg} alt='' />
              <h2>Cars {index + 1}</h2>
            </div>
          );
        })}
        <div className={`side-icon ${displayVal == 3 ? "normal" : null}`}>
          <img src={plane} alt='' />
          <h2>Short flights</h2>
        </div>
        <div className={`side-icon ${displayVal == 4 ? "normal" : null}`}>
          <img src={plane} alt='' />
          <h2>Long fLights</h2>
        </div>
        <div className={`side-icon ${displayVal == 5 ? "normal" : null}`}>
          <img src={veggieImg} alt='' />
          <h2>Diet</h2>
        </div>
        <div className={`side-icon ${displayVal == 6 ? "normal" : null}`}>
          <img src={houseImg} alt='' />
          <h2>Home size</h2>
        </div>
        <div className={`side-icon ${displayVal == 7 ? "normal" : null}`}>
          <img src={dogImg} alt='' />
          <h2>Pets</h2>
        </div>
        <div className='side-icon'>
          <img src={mailBox} alt='' />
          <h2>Public Transit </h2>
        </div>
        <div className={`side-icon ${displayVal == 9 ? "normal" : null}`}>
          <img src={sofaImg} alt='' />
          <h2>Furnishings</h2>
        </div>
        <div className={`side-icon ${displayVal == 10 ? "normal" : null}`}>
          <img src={clothesImg} alt='' />
          <h2>Clothes</h2>
        </div>
        <div className={`side-icon ${displayVal == 11 ? "normal" : null}`}>
          <img src={supplies} alt='' />
          <h2>Supplies</h2>
        </div>
        <div className={`side-icon ${displayVal == 12 ? "normal" : null}`}>
          <img src={services} alt='' />
          <h2>Services</h2>
        </div>
        <div className={`side-icon ${displayVal == 13 ? "normal" : null}`}>
          <img src={electicity} alt='' />
          <h2>Electricity</h2>
        </div>
        <div className={`side-icon ${displayVal == 14 ? "normal" : null}`}>
          <img src={renewables} alt='' />
          <h2>Renewables</h2>
        </div>
        <div className={`side-icon ${displayVal == 15 ? "normal" : null}`}>
          <img src={naturalGas} alt='' />
          <h2>Natural Gas</h2>
        </div>
        <div className='side-icon'>
          <img src={mailBox} alt='' />
          <h2>Finish</h2>
        </div>
      </div>
      {form[displayVal]}
      <div className='calc-result-box'>
        <div className='inner-result'>
          <h1>Your Carbon footprint</h1>
          <h1 className='large-data'>19</h1>
          <p>
            tons of CO<sub>2</sub>per year
          </p>
          <em>
            That's <strong>74% more than</strong> the United States average.
          </em>
        </div>
      </div>
    </div>
  );
};

export default Section1;