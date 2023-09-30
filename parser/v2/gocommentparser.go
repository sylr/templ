package parser

import (
	"github.com/a-h/parse"
)

var goComment = parse.Any[GoComment](blockGoComment, lineGoComment)

var blockGoComment = blockGoCommentParser{}
var lineGoComment = lineGoCommentParser{}

type blockGoCommentParser struct{}

func (p blockGoCommentParser) Parse(pi *parse.Input) (c GoComment, ok bool, err error) {
	if _, ok, err = parse.String("/*").Parse(pi); err != nil || !ok {
		return
	}
	c.IsBlock = true
	if c.Contents, ok, err = Must(parse.StringUntil(parse.String("*/")), "multiline comment not closed, missing */").Parse(pi); err != nil || !ok {
		return
	}
	_, _, _ = parse.String("*/").Parse(pi)
	return
}

type lineGoCommentParser struct{}

func (p lineGoCommentParser) Parse(pi *parse.Input) (c GoComment, ok bool, err error) {
	if _, ok, err = parse.String("//").Parse(pi); err != nil || !ok {
		return
	}
	c.IsBlock = false
	if c.Contents, ok, err = Must(parse.StringUntil(parse.NewLine), "single line comment not closed, missing newline").Parse(pi); err != nil || !ok {
		return
	}
	_, _, _ = parse.NewLine.Parse(pi)
	return
}
