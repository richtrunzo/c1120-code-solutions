select "customers"."firstName",
       "customers"."lastName",
       sum("p"."amount") as "Payments"
from "customers"
join "payments" as "p" using ("customerId")
group by "customers"."customerId"
order by "Payments" desc;
