/* eslint-disable react/prop-types */
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import UpdatedCategorey from "./updated_category";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDeleteCategory } from "../../../lib/hooks/useAdminAction";
import { useTypeContext } from "../../../context/UserType.context";

export default function CardCategory({ category }) {
  // Context
  const { token } = useTypeContext();

  // Mutations
  const { mutate, isLoading } = useDeleteCategory();

  //Vars
  const { _id, name, description, imageCover } = category;

  return (
    <Card sx={{ position: "relative", width: "100%" }}>
      {/* Updated Modal */}
      <Stack
        direction={"column"}
        justifyItems={"center"}
        alignItems={"center"}
        position={"absolute"}
        top={0}
        right={0}
        borderRadius={"10px 0px 0px 10px"}
        sx={{
          boxShadow: 7,
        }}
      >
        <UpdatedCategorey
          name={name}
          description={description}
          imageCover={imageCover}
          id={_id}
        />
        <IconButton
          color="error"
          size="medium"
          onClick={() => {
            mutate({ token, id: _id });
          }}
          loading={isLoading}
          aria-label="delete"
        >
          <DeleteIcon />
        </IconButton>
      </Stack>

      {/* Card */}
      <CardMedia
        sx={{ height: 140 }}
        image={imageCover}
        title={name}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "text.secondary" }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
