let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
doautoall SessionLoadPre
silent only
silent tabonly
cd ~/Projects/Coding/jek-theme
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
let s:shortmess_save = &shortmess
set shortmess+=aoO
badd +1 _sass/minima/_base.scss
badd +16 _sass/minima/_layout.scss
badd +40 _sass/minima.scss
badd +3 _sass/_vars.scss
badd +1 _sass/sections/_footer.scss
badd +41 _sass/minima/_syntax-highlighting.scss
badd +3 _sass/sections/_topbar.scss
badd +21 _config.yml
badd +1 _layouts/post.html
badd +1 _layouts/page.html
badd +1 _layouts/home.html
badd +1 _layouts/default.html
badd +1 _layouts/reading-time.html
badd +1 _site/nothing/2026/07/29/welcome-to-jekyll.html
badd +1 about.markdown
badd +7 projects.markdown
badd +1 _posts/2026-07-29-welcome-to-jekyll.markdown
badd +2 index.markdown
badd +16 _posts/2026-07-30-project.markdown
badd +1 _includes/disqus_comments.html
badd +12 _includes/head.html
badd +10 Gemfile
argglobal
%argdel
edit _config.yml
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
let &splitbelow = s:save_splitbelow
let &splitright = s:save_splitright
wincmd t
let s:save_winminheight = &winminheight
let s:save_winminwidth = &winminwidth
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
wincmd =
argglobal
balt Gemfile
setlocal foldmethod=manual
setlocal foldexpr=0
setlocal foldmarker={{{,}}}
setlocal foldignore=#
setlocal foldlevel=0
setlocal foldminlines=1
setlocal foldnestmax=20
setlocal foldenable
silent! normal! zE
let &fdl = &fdl
let s:l = 21 - ((20 * winheight(0) + 29) / 58)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 21
normal! 018|
wincmd w
argglobal
if bufexists(fnamemodify("about.markdown", ":p")) | buffer about.markdown | else | edit about.markdown | endif
if &buftype ==# 'terminal'
  silent file about.markdown
endif
balt _site/nothing/2026/07/29/welcome-to-jekyll.html
setlocal foldmethod=manual
setlocal foldexpr=0
setlocal foldmarker={{{,}}}
setlocal foldignore=#
setlocal foldlevel=0
setlocal foldminlines=1
setlocal foldnestmax=20
setlocal foldenable
silent! normal! zE
let &fdl = &fdl
let s:l = 7 - ((6 * winheight(0) + 29) / 58)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 7
normal! 0
wincmd w
wincmd =
tabnext 1
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0 && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20
let &shortmess = s:shortmess_save
let &winminheight = s:save_winminheight
let &winminwidth = s:save_winminwidth
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
set hlsearch
nohlsearch
let g:this_session = v:this_session
let g:this_obsession = v:this_session
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
