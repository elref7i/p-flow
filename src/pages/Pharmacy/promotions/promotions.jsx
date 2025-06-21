import { useTypeContext } from "../../../context/UserType.context";
import { usePromotions } from "../../../lib/hooks/usepromotion";
import { motion } from "framer-motion";
import CardPromotion from "../../../components/card-promotion";
import { Grid } from "@mui/material";
import CardPromotionSkeleton from "../../../components/Common/Loading/promotion-skeleton";

export default function Promotions() {
  const { token } = useTypeContext();
  const { data: promotionalMedicines, isLoading } = usePromotions({ token });

  if (isLoading) return <CardPromotionSkeleton />;

  return (
    <Grid
      pt={4}
      container
      spacing={2}
    >
      {promotionalMedicines.data.data.map((drug, index) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          key={drug._id}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <CardPromotion drug={drug} />
          </motion.div>
        </Grid>
      ))}
    </Grid>
  );
}
