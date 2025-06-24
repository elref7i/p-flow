/* eslint-disable react/prop-types */
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import UpdatedCategorey from "./updated_category";
import DeleteIcon from "@mui/icons-material/Delete";
import { useTypeContext } from "../../../context/UserType.context";
import { useThemeConstants } from "../../../lib/constants/theme.constant";
import { useDeleteCategory } from "../../../lib/hooks/use-admin";

export default function CardCategory({ category }) {
  // Context
  const { token } = useTypeContext();

  // Mutations
  const { mutate, isLoading } = useDeleteCategory();

  //Vars
  const { _id, name, description, imageCover } = category;

  //Themes
  const {
    backgroundElevated,
    cardHoverBackground,
    cardDetailsBackground,
    transitionDurationStandard,
    transitionDurationComplex,
  } = useThemeConstants();

  return (
    <Card
      sx={{
        position: "relative",
        width: "100%",
        background: cardDetailsBackground,
        transition: transitionDurationStandard,
        "&:hover": {
          background: cardHoverBackground,
        },
      }}
    >
      {/* Card */}
      <Box position={"relative"}>
        <CardMedia
          sx={{ height: 140 }}
          image={imageCover}
          title={name}
        />
        {/* Updated Modal */}
        <Stack
          direction={"column"}
          justifyItems={"center"}
          alignItems={"center"}
          position={"absolute"}
          top={0}
          right={0}
          bottom={0}
          left={0}
          borderRadius={"10px 0px 0px 10px"}
          sx={{
            background: "#000000aa",
            boxShadow: 1,
            p: 0.5,
            transition: transitionDurationComplex,
            "&:hover": {
              background: "#00000066",
            },
          }}
        >
          <Box
            width={"fit-content"}
            sx={{
              background: backgroundElevated,
              "&:hover": {
                boxShadow: 8,
              },
            }}
            boxShadow={9}
            ml={"auto"}
            borderRadius={2}
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
          </Box>
        </Stack>
      </Box>
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
