function add(a,b){
return a+b
}

function subtract(a,b){
  return a-b
}

function multiply(a,b){
  return a*b
}

function divide(a,b){
  return a/b
}

var number=a
function inc(a){
  return a=a+1
}

var number=a
function dec(a){
  return a=a-1
}


function makeInt(n){
  if (n.toString()===n){
    return parseInt(n,10)
  }
}


function preserveDecimal(n){
  if 
}

describe('preserveDecimal(n)', function() {
  it('preserves n\'s decimals (it parses n as a floating point number) and returns the parsed number', function() {
    expect(preserveDecimal('2.222')).toBe(2.222)
  })

  it('returns NaN as appropriate', function() {
    expect(isNaN(preserveDecimal('sldkjflksjf'))).toEqual(true)
  })
})


