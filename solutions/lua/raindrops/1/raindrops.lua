return function(n)
  local hasil = ""
  if n % 3 == 0  then
    hasil = hasil.."Pling"
    end
  if n % 5 == 0 then
    hasil = hasil.."Plang"
    end
  if n % 7 == 0 then
    hasil = hasil.."Plong"
      end
  if hasil == '' then 
    hasil = tostring(n)
  end
  return hasil
end
