import React from 'react'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'react-headless-accordion'

const AccordionBlock = ({arr, obj}) => {
  return (
    <div className='content'>
    <h2 className='accordion_heading'>{obj?.heading}</h2>
      <Accordion className='accordion' key={1}>
            <div className='accordion_left'>
              {arr?.map((item,index) => (
                <div key={index}>
                <AccordionItem className='accordion_left_item'>
                  <AccordionHeader className='accordion_left_item__title'>
                      <h3>{item.heading}</h3>
                      <img src="/images/parking/accordion/plus.png" alt="s" />
                  </AccordionHeader>
                  <AccordionBody className='accordion_left_item__content'>
                      <p>{item.text}</p>
                  </AccordionBody>
                </AccordionItem>
                </div>
              ))}
            </div>
            <div className='accordion_right'>
              <img src={obj.img}  alt='' />
              <AccordionItem className='accordion_left_item'>
                  <AccordionHeader className='accordion_left_item__title'>
                      <h3>Технические данные</h3>
                      <img src="/images/parking/accordion/plus.png" alt="s" />
                  </AccordionHeader>
                  <AccordionBody className='accordion_left_item__content'>
                        <ul>
                          <li><b>{obj?.capacityTitle}</b> <span>{obj?.capacityValue}</span></li>
                          <li><b>{obj?.liftingTitle}</b> <span>{obj?.liftingValue}</span></li>
                          <li><b>{obj?.platformTitle}</b> <span>{obj?.platformValue}</span></li>
                          <li><b>{obj?.voltageTitle}</b> <span>{obj?.voltageValue}</span></li>
                          <li><b>{obj?.AvailableVoltageTitle}</b> <span>{obj?.AvailableVoltageValue}</span></li>
                          <li><b>{obj?.WorkModeTitle}</b> <span>{obj?.WorkModeValue}</span></li>
                          <li><b>{obj?.PowerUnitTitle}</b> <span>{obj?.PowerUnitValue}</span></li>
                          <li><b>{obj?.SafetyTitle}</b> <span>{obj?.SafetyValue}</span></li>
                          <li><b>{obj?.DynamicTitle}</b> <span>{obj?.DynamicValue}</span></li>
                          <li><b>{obj?.SpeedTitle}</b> <span>{obj?.SpeedValue}</span></li>
                          <li><b>{obj?.FinishingTitle}</b> <span>{obj?.FinishingValue}</span></li>
                        </ul>
                        {/* <ul>
                          {Object.entries(obj).map(([key, value]) => (
                            <li key={key}>
                              <b>{value}</b><span>{value}</span>
                            </li>
                          ))}
                        </ul> */}
                  </AccordionBody>
              </AccordionItem>
            </div>
        </Accordion>
        <div>

        </div>
    </div>
  )
}

export default AccordionBlock