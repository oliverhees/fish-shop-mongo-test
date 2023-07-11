import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/products/${id}`);
  console.log(data);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }
  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      <p>
        {data.reviews.length > 0 ? <h2>Reviews:</h2> : ""}
        {data.reviews.map((review) => {
          return (
            <div className="reviews" key={review._id}>
              <h3>{review.title}</h3>
              <div>{review.text}</div>
            </div>
          );
        })}
      </p>
      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}
