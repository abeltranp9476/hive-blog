import { useEffect } from 'react';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { FavoriteBorder, ChatBubbleOutline, SavingsOutlined } from '@mui/icons-material';

import { useSign } from '../../hooks/useSign';
import { Vote } from '../vote'
import { useVote } from '../../hooks/useVote';
import { MyDialog } from '../myDialog';

import { Loader } from '../loader'

export const PostStatics = (props) => {
  const { votes, amount, comments, permlink } = props;
  const { userName, token } = useSign()

  const {
    voteState,
    handleShowVote,
    handleCloseVote,
    handleVote,
    handleVoteValue,
    weight,
    isLoading,
  } = useVote()

  const styleText = {
    alignItems: 'center',
    display: 'flex'
  }

  const styleIcon = {
    fontSize: '24px',
    mr: '5px'
  }

  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      spacing={2}
    >
      {
        voteState &&
        <MyDialog
          fullWidth={true}
          maxWidth="md"
          title="Votar publicación"
          actionTitle={(
            <>
              <FavoriteBorder sx={styleIcon} />
              Votar
            </>
          )}
          open={voteState}
          handleAction={e => {
            handleVote({
              permlink: permlink,
              weight: weight * 100,
              userName,
              token,
            })
          }}
          handleClose={handleCloseVote}
        >
          {
            isLoading ? (
              <Loader type="normal" />
            ) : (
              <>
                <Typography>Defina el valor de su voto</Typography>
                <Slider
                  value={weight}
                  defaultValue={50}
                  aria-label="Default"
                  valueLabelDisplay="auto"
                  onChange={handleVoteValue}
                />
              </>
            )
          }
        </MyDialog>
      }
      {
        userName ? (
          <div className="clicable" onClick={handleShowVote}>
            <Tooltip title="Votar">
              <IconButton>
                <Vote votes={votes} styleText={styleText} styleIcon={styleIcon} />
              </IconButton>
            </Tooltip>
          </div>
        ) : (
          <Vote votes={votes} styleText={styleText} styleIcon={styleIcon} />
        )
      }

      <Typography sx={styleText}><ChatBubbleOutline sx={styleIcon} />{comments}</Typography>
      <Typography sx={styleText}><SavingsOutlined sx={styleIcon} />${amount}</Typography>
    </Stack >
  )
}
