import { arrondirCote, arrondirTemperature }  from "../utils/CalculProduction"

test('should round the cote and return dm and mm parts', () => { 

    expect(arrondirCote(90)).toBe({coteDm : 0 , coteMm : 90})
    expect(arrondirCote(100)).toBe({coteDm : 1 , coteMm : 0})
    expect(arrondirCote(103)).toBe({coteDm : 1 , coteMm : 0})
    expect(arrondirCote(1003)).toBe({coteDm : 10 , coteMm : 0})
    expect(arrondirCote(2103)).toBe({coteDm : 21 , coteMm : 0})
    expect(arrondirCote(2103)).toBe({coteDm : 21 , coteMm : 0})
    expect(arrondirCote(2113)).toBe({coteDm : 21 , coteMm : 10})
    expect(arrondirCote(2123)).toBe({coteDm : 21 , coteMm : 20})
    expect(arrondirCote(2133)).toBe({coteDm : 21 , coteMm : 30})
    expect(arrondirCote(2143)).toBe({coteDm : 21 , coteMm : 40})
    expect(arrondirCote(2153)).toBe({coteDm : 21 , coteMm : 50})
    expect(arrondirCote(2163)).toBe({coteDm : 21 , coteMm : 60})
    expect(arrondirCote(2173)).toBe({coteDm : 21 , coteMm : 70})
    expect(arrondirCote(2183)).toBe({coteDm : 21 , coteMm : 80})
    expect(arrondirCote(2193)).toBe({coteDm : 21 , coteMm : 90})
 })

 test('should round the temperature and returned it', () => { 

    expect(arrondirTemperature(0)).toBe(0)
    expect(arrondirTemperature(10)).toBe(10)
    expect(arrondirTemperature(10.14)).toBe(10)
    expect(arrondirTemperature(10.27)).toBe(10.5)
    expect(arrondirTemperature(10.50)).toBe(10.5)
    expect(arrondirTemperature(10.67)).toBe(10.5)
    expect(arrondirTemperature(10.78)).toBe(11)
    expect(arrondirTemperature(10.98)).toBe(11)
 
 })