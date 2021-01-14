select "categories"."name" as "Category",
       count("filmCategory".*) as "Number of films"
from "actors"
join "castMembers" using ("actorId")
join "filmCategory" using ("filmId")
join "categories" using ("categoryId")
where "firstName" = 'Lisa' AND "lastName" = 'Monroe'
group by "Category";
