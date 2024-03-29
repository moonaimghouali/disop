import { arrondirCote, arrondirTemperature, calculCoeffCorrection, calculVolumeStandard }  from "../utils/CalculProduction"

test('should round the level measure and return dm and mm measures', () => { 
    expect(arrondirCote(90)).toBe({coteDm : 0 , coteMm : 90})
    expect(arrondirCote(100)).toBe({coteDm : 1 , coteMm : 0})
    expect(arrondirCote(103)).toBe({coteDm : 1 , coteMm : 0})
    expect(arrondirCote(1003)).toBe({coteDm : 10 , coteMm : 0})
    expect(arrondirCote(2113)).toBe({coteDm : 21 , coteMm : 10})
    expect(arrondirCote(2123)).toBe({coteDm : 21 , coteMm : 20})
    expect(arrondirCote(2133)).toBe({coteDm : 21 , coteMm : 30})
    expect(arrondirCote(2143)).toBe({coteDm : 21 , coteMm : 40})

 })

 test('should round the temperature and return it', () => { 

    expect(arrondirTemperature(0)).toBe(0)
    expect(arrondirTemperature(10)).toBe(10)
    expect(arrondirTemperature(10.14)).toBe(10)
    expect(arrondirTemperature(10.27)).toBe(10.5)
    expect(arrondirTemperature(10.50)).toBe(10.5)
    expect(arrondirTemperature(10.67)).toBe(10.5)
    expect(arrondirTemperature(10.78)).toBe(11)
    expect(arrondirTemperature(10.98)).toBe(11)
 
 })

 test('should calculate the correction coefficient correctly', () => { 
    
    expect(calculCoeffCorrection(0.6, 24)).toBe(0.994)
    expect(arrondirTemperature(0.87, 24.23)).toBe(0.988)
    

 })



test('should calculate the standard volume of oil correctly', () => { 
  expect(calculVolumeStandard(3000,0.6, 24, 1)).toBe( 3000 ,  0.6 , 24 , 5769.98 , 0.994 , 5523.97 , 3456.09)
  
  
})

test('should calculate the Bac operation results correctly', () => { 
  
})

test('should calculate the Unit daily production correctly', () => { 
   
})

test('should calculate the Region daily production correctly', () => { 
   
})

test('should calculate the Oil well daily production correctly', () => {
   
})

test('should calculate the perimeter daily production correctly', () => { 
 
})