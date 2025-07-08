import React, { useCallback, useEffect, useState } from 'react'
import { Container, Divider, Grid, GridCol, SimpleGrid } from "@mantine/core";
import { Select } from '@mantine/core';
import { MdOutlineInventory } from "react-icons/md";
import { TextInput } from "@mantine/core";
import { Button } from "@mantine/core";
import { Badge } from '@mantine/core';
import { serviceAxiosInstance } from "../services/config";
import { DatePickerInput } from '@mantine/dates';
import TableLoader from '../components/TableLoader';
import DataTable from '../components/DataTable';
import { notifications } from '@mantine/notifications';
import { FaLongArrowAltRight } from "react-icons/fa";

const CreateRake = () => {


    const [coaches, setCoaches] = useState([]);
    const [loading, setLoading] = useState(false);
    const [trainOptions, setTrainOptions] = useState([]);
    const [coachesPosition, setCoachesPosition] = useState([]);
    const [optionloader, setOptionLoader] = useState(false);
    const [rakeData, setRakeData] = useState({
        templateId : "",
        journeyDate : "",
        trainNumber : ""
    })


    const handleTrainChange = (value) =>{
        console.log(trainOptions)

        if(value){
            const filterCoachItem = trainOptions.filter(train => train.train_type == value);
                console.log(filterCoachItem);
                setRakeData((prev)=>{
                    return {
                        ...prev,
                        templateId : filterCoachItem[0]?.template_id
                    }
                })
                const sortedData = filterCoachItem[0].coaches?.sort((a, b) => a.position - b.position);
                 console.log(sortedData);
            
                                 setCoachesPosition(sortedData);
        }

       
     
    }


    const handleRakeData = (e) =>{
        setRakeData((prev)=>{
            return {
                ...prev,
                [e.target.name] : e.target.value
            }
        })
    }

console.log(rakeData)

const fetchCoaches = useCallback(async () => {
    setLoading(true);
  try {
    const res = await serviceAxiosInstance.get("/coaches/search");
    console.log(res.data);
    setLoading(false);
    setCoaches(res.data)
  } catch (err) {
    console.error(err);
    setLoading(false);
    notifications.show({
            title: "Error!",
            message: "Something went wrong",
            color: "red",
          });
  }
}, []);

const fetchRakeTemplates = useCallback(async () => {
  try {
    const res = await serviceAxiosInstance.get("/rake-templates");
    setTrainOptions(res?.data)
  } catch (err) {
    console.error(err);
  }
}, []);

const handleSubmitRake = async() =>{
    
const {journeyDate, trainNumber, templateId} = rakeData;
       setOptionLoader(true);
        try {
    const res = await serviceAxiosInstance.post(`v1/rakes/create?templateId=${templateId}&journeyDate=${journeyDate}&trainNumber=${trainNumber}`);
    console.log(res);
    setOptionLoader(false);
     notifications.show({
            title: "Success",
            message: "Rake Created Successfully",
            color: "green",
          });
  } catch (err) {
    console.error(err);
     setOptionLoader(false);
     notifications.show({
            title: "Error!",
            message: "Something went wrong",
            color: "red",
          });
  }
    
}

// [ FIRST_CLASS_AC, TWO_TIER_AC, THREE_TIER_AC, SLEEPER, GENERAL, PANTRY_CAR, CHAIR_CAR, EXECUTIVE_CHAIR_CAR ]


const changeNameFun = (value) =>{
  if(value=="FIRST_CLASS_AC") return "First Class AC"
  else if(value == "TWO_TIER_AC") return "Two Tier AC"
  else if (value == "THREE_TIER_AC") return "Three Tier AC"
  else if (value == "SLEEPER") return "Sleeper"
  else if(value =="GENERAL") return "General"
  else if (value == "PANTRY_CAR") return "Pantry Car"
  else if (value == "CHAIR_CAR") return "Chair Car"
  else return "Executive Chair Car"
}

useEffect(()=>{
    fetchCoaches()
    fetchRakeTemplates()
},[]);



  return (
    <div>
      <div className="rooms-header">
              <h1>Create Rake</h1>
      
              <div className="header-underline"></div>
              <Divider style={{ marginBottom: "10px" }} />
            </div>
            <div className="roomDetailsHeader">
              <h3 className="commonHeading">Train Details</h3>
              <div className="roomDataDiv">
                <Grid>
                  <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                    <div className="roomDetailsUpperDiv">
                      <TextInput
                      onChange={handleRakeData}
                      value={rakeData.trainNumber || " "}
                      name='trainNumber'
                      size="md"
      label="Train Number"
      placeholder="Train Numberr"
    />
                    </div>
                  </Grid.Col>
                  <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                    <div className="roomDetailsUpperDiv dateInputDiv">
                        <label>Journey Date</label><br/>
                          <input type="date" 
                          onChange={handleRakeData}
                          name="journeyDate"></input>          
                    </div>
                  </Grid.Col>
                  <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                    <Select
                    onChange={handleTrainChange}
                    size='md'
      label="Train Type"
      placeholder="Train Type"
      data={trainOptions?.map(option => option?.train_type)}
    />
                  </Grid.Col>
                </Grid>
                <Grid>
                  
                  <Grid.Col span={{ base: 12, md: 12, lg: 6}}>
                    <div className="inverntoryCheckMainCard">
                     <h3 className="commonHeading inventoryHeading" style={{marginTop:"0"}}>
                    Coaches Details
                  </h3>
                      <Divider my="md" />
                    { loading ?<TableLoader/> :   (coaches.length ==0 ? <p>Something went wrong</p> :(coaches && coaches?.length>0 && <DataTable data={coaches} componentname="rake"/>
                    ))}
                    </div>
                  </Grid.Col>
                {coachesPosition.length>0 && <Grid.Col span={{ base: 12, md: 12, lg: 6}}>
                    <div className="inverntoryCheckMainCard">
                     <h3 className="commonHeading inventoryHeading" style={{marginTop:"0"}}>
                    Coaches Details
                  </h3>
                      <Divider my="md" />
                      <div className='coachesSpanMainDiv'>
                      {coachesPosition && coachesPosition?.length>0 && coachesPosition.map((data,index)=>{
                            return <span className="coachesSpan" key={index}>{changeNameFun(data?.coach_type)} <FaLongArrowAltRight/></span>  
                        })

                    }
                    </div>
                    </div>
                  </Grid.Col>}
                
                </Grid>
                <div className="submitBtnDiv">
                  <Button variant="filled" fullWidth size="md" loading={optionloader} onClick={handleSubmitRake}>
                    Create Rake
                  </Button>
                </div>
              </div>
            </div>
    </div>
  )
}

export default React.memo(CreateRake)
