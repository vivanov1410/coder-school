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

## Compiling

# run main package files
go run file.go

## build non-main page files
go build file.go
./file