import React from "react";
import ContactIcon from "@/components/HDQT/ContactIcon";
import FieldIcons from "@/components/HDQT/FieldIcon";
import { contactDatas, fieldDatas, companyData } from "@/components/HDQT/data";



const Index = () => {
    return (
        <div>
            <div className="fixed-top" style={{ width: '20%', height: '50px', backgroundColor: 'white', marginLeft: '40%', display: 'flex', justifyContent: 'center' }}>
                <img src="https://w.ladicdn.com/s550x350/629a0b2bb9cb4f0020e11d7d/frame-2-20230907050412-nfxao.png" style={{ width: '50%', height: '80%', paddingTop: '2%' }}></img>
            </div>
            <div style={{ height: '600px', width: '100%', display: 'flex', justifyContent: 'center'}}>
                <video src="https://s.ladicdn.com/5dccb67118ed7f6153f61977/8526971a-6b74-4daa-a108-4fbcfef06ee4-20230824160951-zmhnn.mp4" style={{ position: 'absolute', width: '22%', height: '75%', objectFit: 'cover', zIndex: '1'}} loop autoPlay playsInline muted></video>
                {/* <div style={{ width: '10%', height: '25%', top: '10%', zIndex: '2', overflow: 'hidden', borderWidth: '2px', borderRadius: '12px', borderStyle: 'solid', borderColor: 'white', marginTop: "50px" }}>
                    <img src="https://w.ladicdn.com/s750x550/629a0b2bb9cb4f0020e11d7d/thiet-ke-chua-co-ten-20231017031849-szj9l.png" style={{ }}></img>
                </div> */}

                <div style={{ width: '10%', height: '25%', top: '10%', zIndex: '2', overflow: 'hidden', borderWidth: '2px', borderRadius: '12px', borderStyle: 'solid', borderColor: 'white', marginTop: "50px" }}>
                    <img src="https://w.ladicdn.com/s750x550/629a0b2bb9cb4f0020e11d7d/thiet-ke-chua-co-ten-20231017031849-szj9l.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>


                <div style={{ top: '27%', position: 'absolute', zIndex: '2', marginTop: "50px" }}>
                    <h1 style={{ position: 'relative', fontFamily: 'Roboto, sans-serif', fontSize: '26px', fontWeight: 'bold', lineHeight: '1.2', color: 'rgb(255, 255, 255)', textAlign: 'center', textShadow: 'rgb(0, 0, 0) 2px 3px 3px' }}>Mr. Lý Đức Nhật <br /></h1>
                </div>
                <div style={{ top: '30%', position: 'absolute', zIndex: '2' }}>
                    <h1 style={{ position: 'relative', width: '100%', fontFamily: '"Roboto Slab", serif', fontSize: '28px', fontWeight: 'bold', lineHeight: '1.4', color: 'rgb(255, 189, 89)', textAlign: 'center', textShadow: 'rgb(0, 0, 0) 1px 2px 3px', marginTop: "50px" }}>Chủ tịch HĐQT <br /></h1>
                </div>
                <div style={{ display: 'flex', top: '43%', position: 'absolute', zIndex: '2', justifyContent: 'space-between', flexWrap: 'wrap', width: '20%', marginTop: "45px" }}>
                    {
                        contactDatas.map((item, index) => {
                            return (

<ContactIcon contactData={item} index={index}></ContactIcon>

                            )
                        })
                    }
                </div>
                <div className="line" style={{ height: '0.3%', top: '58%', width: '15%', backgroundColor: 'white', position: 'absolute', zIndex: '2', marginTop: "60px" }}>
                </div>
                <div style={{ height: 'auto', width: '21%', top: '63%', backgroundColor: 'white', position: 'absolute', zIndex: '2', borderRadius: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: "30px" }}>
                    {
                        fieldDatas.map((item) => {
                            return (
                                    
                             

                                    <FieldIcons fieldData={item}></FieldIcons>
                            )
                        })
                    }
                </div>
                <div style={{ height: 'auto', width: '21%', top: '73%', position: 'absolute', zIndex: '2', display: 'flex', justifyContent: 'space-between', marginTop: "50px" }}>
                    <div style={{ height: '32px', width: '23%', borderWidth: '1px', borderRadius: '8px', borderStyle: 'solid', borderColor: 'rgb(0, 0, 0)', boxShadow: 'rgb(0, 128, 55) 2px 2px 2px 0px', backgroundColor: 'white' }}>
                        <h1 style={{ fontFamily: '"Open Sans", sans-serif', fontSize: '17px', fontWeight: 'bold', lineHeight: '1.4', color: 'rgb(0, 128, 55)', textAlign: 'center', textShadow: 'rgb(0, 0, 0) 1px 1px 1px', paddingTop: '3%' }}>
                            Law Car
                        </h1>
                    </div>
                    <div style={{ height: '32px', width: '23%', borderWidth: '1px', borderRadius: '8px', borderStyle: 'solid', borderColor: 'rgb(0, 0, 0)', boxShadow: 'rgb(0, 128, 55) 2px 2px 2px 0px', backgroundColor: 'white' }}>
                        <h1 style={{ fontFamily: '"Open Sans", sans-serif', fontSize: '17px', fontWeight: 'bold', lineHeight: '1.4', color: 'rgb(0, 128, 55)', textAlign: 'center', textShadow: 'rgb(0, 0, 0) 1px 1px 1px', paddingTop: '3%' }}>
                            Law Card
                        </h1>
                    </div>
                    <div style={{ height: '32px', width: '23%', borderWidth: '1px', borderRadius: '8px', borderStyle: 'solid', borderColor: 'rgb(0, 0, 0)', boxShadow: 'rgb(0, 128, 55) 2px 2px 2px 0px', backgroundColor: 'white' }}>
                        <h1 style={{ fontFamily: '"Open Sans", sans-serif', fontSize: '17px', fontWeight: 'bold', lineHeight: '1.4', color: 'rgb(0, 128, 55)', textAlign: 'center', textShadow: 'rgb(0, 0, 0) 1px 1px 1px', paddingTop: '3%' }}>
                            Law AI
                        </h1>
                    </div>
                    <div style={{ height: '32px', width: '23%', borderWidth: '1px', borderRadius: '8px', borderStyle: 'solid', borderColor: 'rgb(0, 0, 0)', boxShadow: 'rgb(0, 128, 55) 2px 2px 2px 0px', backgroundColor: 'white' }}>
                        <h1 style={{ fontFamily: '"Open Sans", sans-serif', fontSize: '17px', fontWeight: 'bold', lineHeight: '1.4', color: 'rgb(0, 128, 55)', textAlign: 'center', textShadow: 'rgb(0, 0, 0) 1px 1px 1px', paddingTop: '3%' }}>
                            UNIGO
                        </h1>
                    </div>
                </div>
                <a style={{ width: '10%', top: '79%', position: 'absolute', zIndex: '2', textDecoration: 'none', marginTop: "45px" }} href={companyData.aRef} target="_blank" >
                    <div style={{ fontSize: '12px', fontWeight: 'bold', lineHeight: '1.6', color: 'rgb(255, 255, 255)', textAlign: 'center' }}>© {companyData.name}</div>
                </a>
            </div>
        </div >
    )
}

export default Index