import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import * as React from "react";

interface IProps {
  open: boolean;
  onChangeStateModal: () => void;
  onSubscribe: (email: string) => void;
}

interface IState {
  value: string;
}

class Create extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      value: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubscribe = this.onSubscribe.bind(this);
  }

  public render(this: Create) {
    const { open, onChangeStateModal } = this.props;

    return (
      <div>
        <Dialog
          open={open}
          onClose={onChangeStateModal}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address here. We will send
              updates occasionally.
            </DialogContentText>
            <TextField
              autoFocus={true}
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth={true}
              onChange={this.handleChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={onChangeStateModal} color="primary">
              Cancel
            </Button>
            <Button onClick={this.onSubscribe} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

  private handleChange(event: any) {
    this.setState({ value: event.target.value });
  }

  private onSubscribe() {
    const { value } = this.state;
    const { onSubscribe } = this.props;

    onSubscribe(value);
  }
}

export default Create;
