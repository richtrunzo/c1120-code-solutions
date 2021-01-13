select count("c".*) as "Total Cities",
       "countries"."name" as "Country"
from "cities" as "c"
join "countries" using ("countryId")
group by "Country";
