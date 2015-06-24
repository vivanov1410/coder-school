# ref https://golang.org/doc/code.html

# Setup

# install on Ubuntu
sudo apt-get install golang

# create workspace directory
mkdir $HOME/go
export GOPATH=$HOME/go
export PATH=$PATH:$GOPATH/bin

# create user base path
mkdir -p $GOPATH/src/github.com/user

## Running
go run file.go