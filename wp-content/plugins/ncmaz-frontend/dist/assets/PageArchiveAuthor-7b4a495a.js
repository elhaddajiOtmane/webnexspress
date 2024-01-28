import{N as s,r as f,z as V,a as o,j as A,F as K}from"./main-01589982.js";import{B as q}from"./ButtonPrimary-7b9ce8b4.js";import{A as _,S as $,a as ee}from"./ArchiveGridPost-cd33a26d.js";import{P as Ae}from"./queryGraphql-58383481.js";import{D as re}from"./DataStatementBlockV2-5007f6a0.js";import{A as te}from"./PageArchive-d31b5440.js";import{N as ae,a as se}from"./NavItem-016c6b8b.js";import{N as oe}from"./NcImage-befadaec.js";import{A as ie}from"./Avatar-e46ae567.js";import{B as ne}from"./ButtonSecondary-a2b42169.js";import{b as le,c as ce}from"./useQuery-2326dd90.js";import"./Button-d1fff97b.js";import"./twFocusClass-d0735f61.js";import"./NcModal-42d0aa76.js";import"./ButtonClose-46908ee4.js";import"./transition-c5ae4969.js";import"./use-owner-4bb5aead.js";import"./dialog-c077491e.js";import"./useWindowSize-e7f502a5.js";import"./menu-8d10a083.js";import"./BackgroundSection-f1af2e57.js";import"./SectionGridCategoryBox-1942c42b.js";import"./CardCategory1Skeleton-a1084ba9.js";import"./index-0c588460.js";import"./CardCategory5Skeleton-3bfb8c40.js";import"./Badge-126d3422.js";import"./Heading-8e8fa951.js";import"./NextPrev-10599e1e.js";import"./Card7Skeleton-375650e1.js";import"./PostCardMeta-4fa2bae8.js";import"./formatDate-dfe39bf7.js";import"./PostTypeFeaturedIcon-f1f09999.js";import"./CategoryBadgeList-87f3b9ef.js";import"./SocialsShare-7f8eccda.js";import"./SocialShareItem-24d6d915.js";import"./PostCardLikeAndComment-fcd151a8.js";import"./PostCardLikeAction-813d8440.js";import"./PostCardDropdownShare-48c067a7.js";import"./NcDropDown-b9381a6a.js";import"./checkPostStandHasFeaturedImage-07d23d31.js";import"./CardAuthor2-e5d1b032.js";import"./PostFeaturedMedia-db84e141.js";import"./useIntersectionObserver-8d200e88.js";import"./index-b8b43c8a.js";import"./ButtonPlayMusicRunningContainer-80762dbc.js";import"./LoadingVideo-66b8164f.js";import"./Card10Skeleton-c1662d20.js";import"./Card11-37890797.js";import"./PostMoreActionDropdown-e7a59822.js";import"./ButtonPrimaryDanger-9c37c9e4.js";import"./Card11Skeleton-14ab7f45.js";import"./Card13Skeleton-d2aa466b.js";import"./Card17PodcastSkeleton-e6be3a38.js";import"./Card2Skeleton-881d2b5b.js";import"./Card6-91b25b63.js";import"./Card6Skeleton-4e59c3a1.js";import"./Card8Skeleton-efc87d91.js";import"./Card9-683ec8f1.js";import"./Card9Skeleton-d94b033f.js";import"./contants-3c5f400b.js";import"./contantsCommon-3b0e63b7.js";import"./EmptyState-8d3ff74e.js";import"./useLazyQuery-f7f1f4cb.js";import"./Tag-82d8b167.js";import"./getImageSizesBySizeName-22c25ac1.js";const ge="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATySURBVHgB7VZNaFxVFD7nNUnTYNoJISHFJpns/WlcFzpdKaWSdiGiIkwLpehKXblLuqguXDSgYmuRJIJ2IdSUunLjVF1LIoIIimNEGhchk0ZJ8ubdczzn3vvuvJk3k5+1vfB497177znf+c53znsA//eBB9k88kW9xBBNAWMJEcYZoIDygIDrMl82xEuHouju6gtY2a/NfQEYup2UI8RpAC4yIAMzNp1mnSMrGGadQlWumdUXuxb2sr0rgJHbXCRKvpTpSe+H/SFUIOpQHctAhLDIuminiAKkfmb1pSPVAwMY+jQuy+p1sVpot87ekQwhhMOzArIMBURQI8MX1y4eXtw3gMG5nfMY4Z1AtQYM3LLXv9IljNg567yfCctrl3oW9gQwMrdVrFP0gxwZaHJmI4M09y42sinwljLa8HvYQUnf1bpjnlx9rTkdXa0AYgPfCNwByOTbg0BnMcTN4/0IV57ogrNjEYz2OyQPY4aVTYDTd3acPjwOuY7Fh1j1NNmRgcGP/ikzRnNspQwBfxoFZwQ2ejTie8/34Ohj7WU0eHMr5Y7TIBSJVFN57cqRkIooe4g4mmbDOhESBLreE0K9Ewks4+5kCO6d6+zcOjNqQy4j53WudvW8oRlol4LC+5slTkwx5NSnOSU/kCK3U49bynNOv//LwMpD0i3qyJpily3wedBD44Xrm6Xam/2VJgBSKlOoQiJqqEooV4q0ztk+Okol8pz317/ehs9/rqduFLM7I/InuUeug9k6ldmUbGwGIFtPWlU7h44IMUKYTZFbP9qdCx4++ykOITK7tEs0yCmHfpGsKLkErSmghJ5GTz2HO3rFszWC6ArhWE++fDXfvit6FISOfshYtR1TV4s5AEL9AKlDpS7Q4thIHwiogad1GOcgbc1Kv1eATSU0tWss5ABwomuEaStJRcOeiJvn+tL3+NTwoZz/G2f7Auw/Ngje+W4r7Rtpf7KfTdcYGhFkGOANWSiAp82dtQqwknr5yZ5dP1yyHuZf/RJLQK4Psg3JdRCvCH2znu4NfUByWGUDtgrYGEQRpK17I4QSHei/YflB4noAGc2b7wkiP7HvegIu5QAQUUUdU6IbwNaxFZYCobZZ3wOABtOwwwqEXFOLiJfTvVkN3JUw38hWQeaPA5/7pBYcvPJML7w62dvk9FlZT0X24wOJwjhLHIop9DEwES3mAGxfG6r0vv13VQyM+5ID9iWg4qn8GgcRnSp251Ly7W9xo3n6fR5Qqn73WUD4fefa8P30XNO3AAxdtZ3Q5Yq1j9sUCI2Q9nNtVpTPSOj9rv+71IkN8O8sI8Z2wqvZc00Att87Pq8CYXe4ISBjRYpWkHrxLgA05+GD5kC4NSvI6va7wwsdAeiIDV+QI+s+ioZRG4UVEbaTpHWSUABCnjF/11frsdk+03ouBwBmj1clDW9xk3NNCdnuGsC0AvBlpqw5upU+x4SrpOQSzE5U9wYgoz57Yl4MXpASqrnck0+HsWXUqRW7yMmVnmdA3m3IWtnMjrX9KW0LwNr7YGzRJMmk/IBUG82EXctulwLLGDmBKgu2B5glk9Qn6x+eWOjkpwt2GzcmqmJnAi6vlDGCaUlA0X5aO1SB6/v2Sc/NwMfjC7DH6IL9jFtj82J3ni//eTpCOt93GEvgPqn2q7b+L9W0lcuvfEV+6xbh1uh9eDT2Of4DgR+fFHRgkXIAAAAASUVORK5CYII=",me="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGUSURBVHgB7ZbhccIwDIXfsUDZoOoGdAK8AWyQdALYADZghIzQETIC3cBsUDagduu2xnl2HCf51X537w4SWZZjSTbwzzCU0cnobPRudHOyv1v3TmEG9kbam7BP1rbCBAi+VnsrlHY+iqhx/5lLZX1sMZDtBBOHqpCJoJtgJdtgx+jAj+QEoANHOy+wBvf72zr5ATbeRDUJKklNVrIObJZOjFXwXxF/eyTQZMAG5SjwyvhhERgLcRJbbQ4P5Jkg0qxsF0tGW0hL/J5yDSuMR4FXSAfWdFYYj4A3pw6slh8xDcz3JwvMj6Re+gFcyXuFeQK4sgAuxHDwIUJgifzGDFkZjk1EifikZagw7ZkuiF9i1rFB2pv0EDhokPc1rM0R8btEsrntPcOje9aiW8NCxi6Rd22r0MM5MJbA8WtibNMzeXL13wh+P5/2nm1cQKnD6ZCYPPtCYqlxn7GSOS4VQNG90E8k7bQbGID10bvvMQTdxDogP4AzBrRixsXoyegFvFPGsK3WVtTzwHG9rJFOQsE0R/gf4gOL1Sjdt1x/2QAAAABJRU5ErkJggg==",de="data:image/png;base64,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",pe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK+SURBVHgB7Ze/bxJhGMef96Uk1UGuoUMbo6FdOshQZ02kSR10gPIXWDcTF7WBxsU2Jg5KmjjipK4uVzqwFiNsJmWoIy3BoQ5Frh2oCfo+Pu+VXu+4OzgOZLGfheO5932f773Pj3sP4H+H9TN4ckWNCcYSyFiMJkbIpLRvaQiszFCUBWJO20gWvK7pSUA4pS4j42uAulMvq1Zp4fX6m8TH3kO7oKyqESa4SoPmwQ8kRDCxoL1OVt2GcLcbCj01F3zHt3MJ7ZhcQ1lRl8BVo5NzmsA5V2GICAbLmkNIbALktkvVcJ5gw0ITXNzsDIctBBz5dqfzR7dnYf/lPSg/X4TrE5fBJ4rMJ5s/8x+Z7U6Z/ioehSvjQbhGztN358AvMp/C6dwDVwF6qTlQ2qsb18XKIQwCUnmCVdQpepPh+vY7cv/GFBydtCxi/CIElWa7WY0ZxgBLSHmOzqPTEBofg9ClIHxvnECt0TRsklKl3h43pYfq+FcL8rs/9HFOcOqm9FOwCGDI59FFgUzCW7Nh/frxpx2ofW1abPlvB7RD05Y56cU5iGdLsHtwbFsPGcQMMYYR0HfD6XQukbu16pKwDFjEJgAGqPvazybMvMhDOL0F2WLFsEevhtymKE4CfJMt7lHcf+vX777sG3YvPcMsQAOfHFHS9YnmJKAKIwIRy2ATwLAAI4Kaj10A/4M5GBGC8U2bgEPqTDiCMEgfWib++ey/5XWsPKNDSIC/h3+IEHQu2Dg/F9jOAxOp3GCnoC7Ip29kEjNmm60PYEskYYCS7IJGay90Gm0CtLfJqgDxFIYMvQEfyrWhlwBdRCb5gSYMaye007gnN51udj+WP6FjeZBvtz9C+oZiXpYhdXpyTwIMIVQdLMDXvAqRyYYC1s3ZPpCAMyZTW3cEiiVZJfR5JivF9GmGVYZQkE3GXOcX9OIvgwwD4SN3gu8AAAAASUVORK5CYII=",we="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMsSURBVHgB7Ve/UxNBFH53MpACyKK2YOgThdo4YueADrEzWIgVAf8AfjTaQXohWDpCohUyBltwSGbsCBw9IVYWjgs6zg2Ot753kHC3t5dcgLHRb2Zn9nbf7fv27dtvdwH+dWjNGF9lbMACa1gADOCPEWxiJ11cgFbSQJQs0Fc55xtBxwxE4ArrGEUHz+DYaRCUkczzr/z7q0aGdQkwxiIaWCto1AdnQ9mCozucm2U/Ax18nXeM6mBtncM5IaJD6xaOlfAzuARq5wkdtBxWQ3B+hDTQHraFWsqm+Wtb7tS8zlmEZg6nCXZR4Lgc/fJytMhW6HydnPf09MCL+YxnlHR6FoqFAvjh9VIWwuGwq21mZgp2DYNp0LoCYPb7/kzZfpl1imrJLMwLGYXNTeG0cZanEymP/fTUpMsGfTz2JYAGe/Kg5FDG/XuDSgLGzo7Lbi3/XmW35474CUhkQLHPKeQykslHnrZYLAZRLE4cHByAAhHG2gc8BEjhwAfyQMmREc86j6Um/Bx6oIM+fFo/AW4V3/1uGDuexBtLjdfqlLCDQ0PwYS0PQUBS7iEgQNQVHHkpUuMTtSjcjMdtkpVKBYJAcyy1Uwnr7nuKgGEYtW9yXo3C5OQ05LJZaAJMRaAhctll1zdFgWaPIYU3uaYIgIoAb2RMTpyJRlGYR7EqFjahSXAVgXKDn2zni5kFV1s3JmA6PQfNAPOtpCKwAQHwcjHjigLlxeeAyVcF7jgvATwDVlXGJDrx+K2ayJBzZy7IEQkC1Jx3yo4uSYrTc7M1Wa3s74vea912+43r0Vp7tY3KWj7vkmKSZmc/lS5Jil1gjsOI9L7eQUT17PKSXScnqjNDRYJJh5GmiIJ9C6KQhzvDHpLF4rEiUvLRchxiod0QjcZ8J2bsGrYdbtfyN37YW5fA376QeK5kpmnytlDrF8zUBFwgLBBJzn9+ktuVd0LTPCohiW0kcRfOfy/Emf9Ocf7jraozyLV8XQv+HnAB17wk4OjBma7lBHzh2EmD4XsiAiilwzG+B8Qo/ttfzzmhyadZ+218eiXw1dMnju8PjqcZvYZgg0QGw/0R/iMg/gB2VvtryQD6zAAAAABJRU5ErkJggg==",ue="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPcSURBVHgB7VdNSFRRFD53GsWBJseFUVmDP2EliEqQi4wUxonBIi3a1EaXugja9ENBbcLatsh21kJ3pVESpaBRG4twSFKJZhqkH8hFbxzBIZ/vds9j3njefffNjG7rg2Heu+++e75zzznfuQ/gXwfbzOTxwP5WMIzT4q1WBqySAwQyi2jiOgqcR3WP52lE+zJV6JoFEXgVqO72cHZTGKksZD4DngCD3QqlYo/yz82BycDBSp3/GRHTGmELQCLbmNHWpiUSbnM8bg/Q63W+NrNV4wgOTDiwbeZloKYTXEkqgC94OIyonnlLd8DOjhCUBPeaP0R68RukZudgZXYBVsW10pAB3aqQOAjgtqPnVoJZ8Alj1VcvQnlHuyDhBzf8fjsNc31XVEQ0L1tvksPhCIEwPikb333+LDS/eSb+z+Q0jihraYajH6dMshICOvc4dtW2Axh3xtkgHQv29kBt//XsPXr2c/gJLI1NwFpy2RzzBStMw0jQlwkLIn7nnvmzGZRCYSMwUVrzlZYaLobeWFgcGDQX1JMpUKFEEGkYegD++kPZsQ8nL5hh2TDIE6FkvMq6z4YARUau89r+GzZvPl+77WockV78bhqkc+RQYGW8QEGTCZgKR4Del4tsR+C2063cI3KiYWgADhCCFnQRFjoXQ0N3BOEltjYIMHu9Y7ZboAuiR3X375rP9/V2mwZk/Bh+bLuX53Ah5U4CAI1uL63Mzmev0ftciyNwF9KkDLfX19meYx9REbCVHi23tUxMfab4VIBsTIVVkQ8WipylG1ARsCFNFsgFmuFuQPV0AyWg0Qcpsu1lLUfMf0xGmuGrpgTPKxemeoAyLUFTEBAt1EZg4yUadzq+NDYOKvhFzGmoFCSjTgIcpugM3FprezHRrGTzk4RCNVQhKKpDXssGcXBxEhAnGXmhT32Xs00F/5EETU5VX0DpRkm2gCUs5xM3jFEHgXZxjBJKmKATLWWLZRbxS+WEoaEkVH0D5dtmXIQ6vJJ4bd3nbUYUh58POeoeiaEhJEfJ4BiSl72Xm5GtDMNa/KHgGHUjQHfAUseSTCekxlEJp4+dcm49NiLpUOKVjeisuMtrHsXswkQ9tHoDGsIw0JMRTV4J2ro4H8qDDgIRbSEhQnFJDoVKmtFDud+7wWDQE1EcTpVKiKFgDLqACAat618u9e8CDeN+QouNqh66SnFIvKCzoiarMqiyFSK/CBHzqC7Ogbm+Dzy5FsBwhJOxKs54T/Gu8gSOYdzz9QlMNvQ6nIw3RXJ8EyA29WnGOT/+rv1c5/L7GWzd+LMSVUMpN4SaMiEytM7/Ix/+AprI2LOa3py9AAAAAElFTkSuQmCC",Ce="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAL8SURBVHgB7ZfNbtNAEMf/634AEqU+9UARuOoVhJEQ1zqHlnLrnUPdB4A0T1DnCZryAklfAMKJilZKKk70QipxAIGQI0ElLpU5FfrhZcapUzf+TqOe+pci79gb729nZ3bHwJU6Enk6rxpSxXUsDEnMSAmd/q16DyQcajtConWi4G1pQzRzvDYbxOq81GjgFRp4gUw1w19s+lnF92I9Q990iLU5adFlBf3Jdl0slbaSPRMLwa5XruENudrAxVUmr1jIA+EBjOITNTUMTrEgkRBrT2UjygMff9Ww/9dGHt0Z0/FgYsE3zag4CUHExcC77xY2fpShaRqyyrZtPLlt4vn9aucGZZE7hEeUPXaw33DQ4CyAi2IcAKvRaGQGMQwDB98CNyilOcuotRTspwSN0w5qHMAgRGluepONg5ARcZAGwLOt1+teu9VqeTYvQ5IUF4uREERnoI9s2N7ehuM4XpuvbGeQGQmhSDzE5UnzjoBeCAk6Cy5TI2deD3oiy5kQUrVa9eKApeu6Z6tq+quGgHG/PYwLyjTNbpsH922Oj3a7jQlMpb6j6wmXjmIMSAxQKBTw+6cD424xtX8XgrbOFgYgH+DrZxsvHjcweSs61E6OsOu3u8vhnmBXUdIHCbq/Uql4ccBXf6/gJWAPJAGQ7FJTOCEIHJMnRr0lSYyq4D7As7YsC+Xy2YZ2Y1hNA+BNsRm0u3NnMkrTGnKIB88LcDporccOEB5iDTnUbDZzA7AXXm6Kc9tq6CivzMlVurns2zt7tXPPX38p4eC4s5zGvWVMjnU22smbeioAyz3EFHndToRIq6rKHzTsH7TxbNrC/HTO0tOl4ndLhE7EUD5wbBBtAZ2KOVL9ANAy1KIAWEmFrkYeaaDHIzt761QtLSIvwPKmWIp7nljyM4gYwYoQ54/eHHLoZLSKmyIx4LN9/MxKUxFe1aUhozgL5BF9c/QEYd8Qvl7NyhmXCxIBXYSPfocGbgkFdfcf1oM74kAhesWZNKJg/MjFnzyDXilO/wHLeTD1J/bsowAAAABJRU5ErkJggg==",he="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANwSURBVHgB7VdNTBNBFH4zi1spoDRQEr1QLh5MTDT0qpaL8WAikZgg0QgXG+JBuBoTejBexYMheMEGDSQGQuJBbvwc9AKmCUaip3LRhEKoINvfnXHeQte2O7tbar3xJZvdmXkz75v33rw3C3CMAxD4B3RP7DSfTKeb8Xt68EwcqsSRSKDSxgzcZ0QPESAhDry5dDUSAwYxxll0etC/WOm6FZFA5d5sfogAfWRRbL90XMhH3oZ9UVdJN4E745tDFJSRypVbyTBGu6YHfXE7Ceo0vW88ERG7eV49AQQPUMoWbr/cvGgnQZwIiOERqB2SuTzrevewLQaVkEAXoAWg5pC7xuKO3rGdAMYA/BfwAFH0ifJeCwmqsKqC0Osh0NPpheFrTcZz5ZzHHPM3KeY34RDqHUuEiufWFTfQCsD1/nIF4VAjzK6mILGngwyo5MmNU9Da9HdPwYAKneLxi74Pa+mSuUQxYm2x0C6xBCXspkxJsF01lLS31ElJ3OqsLyFQTMSrEjh/9oTxNkkIa2DukZIglHfLlOxnuaHkWc9pwyrF5kW0tyjghJkVDTSxRjEasrq54ZKtccFQtsjy94zwd73xjb7GZyWehfUfOdjYzoO/0Z4Ezt36zSz9DAjmjWgJCSMeQO5zLcNga49ZfI5P1eA8UPg0V62DfMBO/voFuc8rwcaWbjdkjQmm1CXtpOe/pKBaoLvcYLqD6ZCkNpudF0fMq1IRC6olKJ3wVcSMLB7KYao9TKW21sAdlUe4G2ZXNftBvHuUkzjoh5jdHDwJxWfdDcvf0rD+094VhPNFKQnOyJzdJLTC0/e7MPlx39XPmB0nP2mOMppHWZKSUD0Uz62tS7QchwYPdcwLGAePZ345u47D67kBn6nHYt++8W2R13mk0MZAvCySUzBwwlCOhUpKMMNFjUjB7Gf3k8RYrqP4YmwpBqpKX2Syer9QFcA2mnZ+7aB4BQ8LUqGGJEQCQ9dgvGBmrCRwOZDR8pu5dFt3RalllCxAjSEoxqfCrR3l/dLM8EZc1zmwYagxAc5yXbIxxzNXq2tegYDdD5JjQZgKt41iEOEiUDUBMppS9y45/aFVnH16xzb7CaUjhYB1Vc7FzYkqkakHviU32SP/i957tXNV5ywkMl6IE4KVsFANk0KzyLgkpnl2o3MDHUk4xhHxB3DiYmIPR6tUAAAAAElFTkSuQmCC",fe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAN3SURBVHgB7VfPTxNBFH6zbWmh2BYEBIGkJhxMiJF4MIIHIDEinDBRr5REzxr8A9r+ASqeJaZc1QS9gPEiXDB6EQ6EC4k1UgWNdUWg/Gh3fK9l293p7LYFjnyXzuzOvPnme9+bnQKcIAdWyeDA1JeA1+MdxmYv59CFswPZFxxUxkDVOCw4WObN6mDLbAVhyyPRPPMjqIAjzIANc+CBMqbEGVciiaGGyTLGliZxdmY9gsPCcDjENciMrpVQxpJETvraKdx5HxwZmej3wZYIVEKCCNR4vJ+xGYRjgzURRfaQFDheAgRHuHn65wiUQ4I8cNQUtFUr0F3vwl+HuNg4mdyWBA1goNyXBaag767WQeJGI0TP18qGwEBTFSxfa4CPvafh1eUA/tbDww5vYQCWNFWZLQkaICtBCkRBO085s/27wWpc0G0ac6fVA88v+cHnNNtsrKNGfBYS1RDT0Sf0YfyCLxtIxMCZqny7HWU37dhmbG5RZcTcP0DbzK8+MJiR2NPub7e6pYF7MD06KFWoIFhhY198x0JSEsD4ReOLTp8zG/xZfBuW/qVBhN9ZmPoisQNX5pJwfT4JUhLpIoJBOgb0jlNvaPQtMOBDch8D/4ZvKQ18ru2s2Yy59blYtgpW8b2OpY2MuBjOz2RjiXBVuYL4s0DtwnY4CxQHyC1ActJuRXQbUkIgc4p4tLIFMjiY26+3pYeVDG/Xd4ue6dWiQzQnqfAyUTxPhNETqt1AmS966guuv4dlS+kxwkoFSxIKy+XHCpQSMbe6ealExwQVKH12Kuzsbi7q7byeac4WFZsyI8wn94p88ATPET+a1GhaSoOdCljOcfXmubzyeSU8HucChrFNiczl7ZgC8ZS89Uk1VY0IvBzNGvt5EvH+OhUYi0EJEpKaNyG8vGlLgKBx8zomJ2V4+imUgKxUdVAKJr6mwA64hdm1ocY5SxJ4DYszxsbtgkzgCSqqQX1S4PHKNpQCx+ue+KzonHC5nVEyDliADjBaUAeZlTxQSgGCBjxCGxWfS693B/eK92igINiADFnKIwUCEFsbbBqVvbO86JZL5KgECJbHNsnGQevHZgwODzXDtAd2BAjl/vkJoSrhClWJ4X+OqMwDhyKRJzP9p1dh+yGc1QXCpx+hcvo0M3idSm1NGk/EYyUhgi4m1VUBf2pP/VvJoiewwn+slkvry4xRDwAAAABJRU5ErkJggg==",Ue="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKNSURBVHgB7VdLbtpAGP5MnFQoUeRlF5UCK9puCifAOQH0BAk3yA1STpD0BMAJSk6AewLMKupDApbdoShJm/Bwv7EFtcf22ObRVT5p5GFm+Of7n/4NvMCDluVwHzCOgbMFYDpAmUsF37ZNYSOO7hT4+o7zlGLTkbjlZTpwxYvrSI/2HGimIZNI4gdwwcuvsCb432YJ+IR1SAjTHwFfKMTEhqCM7iPQqAATZCHx3eXh+n0rIBGbRE6jiOQQTeB6mwQEqG35ELiM2QsROOejhR1hBnx8T/cggcQQwdTDq3LZHQL6yQmSsJhMMB2P3edvy5K3Rw9AJS4+XCtwOMvx0zCcP/2+swmeh0NXTkAua43/3pxklsDmUb2+ssC62C8UcHwWEIuF5/IwCfrAkNPxsFbDNnAQVsQUJSBEYhaRDXuGgTgIX9+120gDYQ0ZeaAaIsHJB2TA82iEX42GO2acqxClTM4X/CsSC595lojSQIawxrBYVJLJRZDQotyxKYS2OYX7VNDxj81kLm3Omed6goC8aeJ1qwVdYbVphIUcX53QfYtj+aAoNnE44KVvej2XxDqgO+wQiT3AWkgHhQb5GCFZLo9S5h4YLOermCh65rH8B59sG9vAfbcrL1n+sh0ITMZEx//7rtPZmMgj68nDzU1gja5v+3+HXmDfWDw16QWWr1bdyBcZoKdI22WqPg0GISVIYFRyDa8gwX7SZHz0sCOQxHlJsnioTrAxtTSvqdkFrmUCAv+1vSOBStRebMXcZz+oSR3QutC8RvdUsa8GA/VSS2jZVWDtuXgLfFadSXx30ITNuRfNbWSD+PgpJhEQyPQZeOulrskyW3O8+SpmROpRI5tPiz1kJ7aHfIECfwEmmg76OHRZuQAAAABJRU5ErkJggg==",j=te,LA=({className:G="",clearFavoritesButton:U,sectionCategoriesTrending:B,userData:g,listIDFavorites:E,isCurrentMyPage:X})=>{var y,F,O,R,Y,T;let n=[];const m=X;m&&frontendObject.currentUser&&(g=frontendObject.currentUser),m?n=[s.Published,s.LikedArticles,s.Drafts,s.Pendings]:n=[s.articles,s.LikedArticles],window.Favorites||(n=n.filter(e=>e!==s.LikedArticles));const u=((y=frontendObject.allSettings)==null?void 0:y.readingSettingsPostsPerPage)||20,[d,Q]=f.useState(j[0].value),[l,I]=f.useState(n[0]);f.useEffect(()=>{const e=window.location.search,r=new URLSearchParams(e),a=r.get("orderBy"),i=r.get("tab");a&&["COMMENT_COUNT","DATE","FAVORITES_COUNT","VIEWS_COUNT"].includes(a)&&Q(a),i&&n.includes(i)&&I(i)},[]),f.useEffect(()=>{typeof jQuery!="function"||!window.Favorites||jQuery(document).ajaxComplete(function(e,r,a){const i=a==null?void 0:a.data;i!=null&&i.includes("action=favorites_clear")&&(r.status!==200&&V.error(`${r.statusText}: ${r.responseText||s.somethingWentWrong}`),location.search="")})},[]);let p={};if(l===n[0]&&(p={order:"DESC",field:d,first:u,authorIn:[g.userId]}),l===s.LikedArticles){let e="";if(m){if(window.Favorites&&(Favorites!=null&&Favorites.userFavorites)&&Favorites.userFavorites[0]&&Favorites.userFavorites[0].posts){const r=Object.keys(Favorites.userFavorites[0].posts);r.length&&(e=r)}}else if(E){let r=[];try{r=Object.values(E)}catch{}r.length&&(e=r)}p={order:"DESC",first:100,in:e.length?e:""}}l===s.Drafts&&(p={order:"DESC",field:d,first:u,authorIn:[g.userId],status:"DRAFT"}),l===s.Pendings&&(p={order:"DESC",field:d,first:u,authorIn:[g.userId],status:"PENDING"});const M=le`
    ${Ae}
  `,{loading:x,error:J,data:c,fetchMore:b}=ce(M,{notifyOnNetworkStatusChange:!0,variables:p}),w=(c==null?void 0:c.posts.edges)||[],{ncUserMeta:t,name:v,description:N,avatar:S}=g;let C=[{id:"youtubeUrl",name:"Youtube",iconPng:Ue,href:t.youtubeUrl||""},{id:"facebookUrl",name:"Facebook",iconPng:ge,href:t.facebookUrl||""},{id:"mediumUrl",name:"Medium",iconPng:we,href:t.mediumUrl||""},{id:"githubUrl",name:"Github",iconPng:me,href:t.githubUrl||""},{id:"vimeoUrl",name:"Vimeo",iconPng:fe,href:t.vimeoUrl||""},{id:"twitterUrl",name:"Twitter",iconPng:he,href:t.twitterUrl||""},{id:"instagramUrl",name:"Instagram",iconPng:de,href:t.instagramUrl||""},{id:"linkedinUrl",name:"LinkedIn",iconPng:pe,href:t.linkedinUrl||""},{id:"pinterestUrl",name:"Pinterest",iconPng:ue,href:t.pinterestUrl||""},{id:"twitchUrl",name:"Twitch",iconPng:Ce,href:t.twitchUrl||""}];C=C.filter(e=>!!e.href);const z=(e,{fetchMoreResult:r})=>{var a,i,h;return(a=r==null?void 0:r.posts)!=null&&a.edges.length?{...r,posts:{...r.posts,edges:[...(i=e==null?void 0:e.posts)==null?void 0:i.edges,...(h=r==null?void 0:r.posts)==null?void 0:h.edges]}}:e},k=(e,r)=>{let a=new URLSearchParams(window.location.search);a.set("tab",e),a.set("orderBy",r),history.replaceState(null,"",`?${a.toString()}`)},P=e=>{I(e),k(e,d)},H=e=>{Q(e.value),k(l,e.value)},W=()=>{if(!b)return;const e=w.map(r=>r.node.postId);b({variables:{first:u,notIn:e},updateQuery:z})},D=x&&!w.length,Z=()=>{var e;return o(K,{children:[A(re,{className:"my-10",data:w,error:J,isSkeleton:D}),A(ee,{is_skeleton:D,posts:w}),((e=c==null?void 0:c.posts.pageInfo)==null?void 0:e.hasNextPage)&&A("div",{className:"flex justify-center mt-8 sm:mt-10 lg:mt-14",children:A(q,{onClick:W,loading:x,children:s.showMeMore})})]})},L=U&&window.Favorites&&m&&l===s.LikedArticles&&!!w.length;return o("div",{className:`nc-PageArchiveAuthor ${G}`,"data-nc-id":"PageArchiveAuthor",children:[o("div",{className:"w-full",children:[A("div",{className:"relative aspect-w-16 aspect-h-9 sm:aspect-h-6 lg:aspect-h-5 xl:aspect-h-4 2xl:aspect-h-3",children:A(oe,{containerClassName:"absolute inset-0",src:((F=t==null?void 0:t.backgroundImage)==null?void 0:F.sourceUrl)||frontendObject.authorPageCoverImgDefault||"https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",srcSet:(O=t.backgroundImage)==null?void 0:O.srcSet,imageSizes:"_1536X1536",className:"object-cover w-full h-full",loading:"eager"})}),A("div",{className:"relative px-1 sm:container -mt-20 lg:-mt-32",children:o("div",{className:`relative bg-white dark:bg-neutral-800 dark:border dark:border-neutral-700 p-4 sm:p-5 lg:p-8 rounded-3xl lg:rounded-[32px] shadow-xl \r
          flex flex-col sm:flex-row sm:items-center`,children:[o("div",{className:"flex-shrink-0 ",children:[A(ie,{containerClassName:"ring-4 ring-white dark:ring-0 shadow-xl",imgUrl:((R=t.featuredImage)==null?void 0:R.sourceUrl)||(S==null?void 0:S.url),srcSet:(Y=t.featuredImage)!=null&&Y.sourceUrl?(T=t.featuredImage)==null?void 0:T.srcSet:void 0,loading:"eager",userName:v,sizeClass:"w-28 h-28 sm:w-32 sm:h-32 lg:w-44 lg:h-44 text-3xl xl:text-5xl",radius:"rounded-3xl",imageSizes:"MEDIUM"}),!!t.buymeacoffeUrl&&A("a",{className:"flex sm:justify-center lg:hidden mt-3",href:t.buymeacoffeUrl,target:"_blank",rel:"noopener noreferrer",children:A("img",{src:ncmazFrontendVariables.pluginDistImagesDir+"buymeacoffee.svg",alt:"buy-me-a-coffee",className:"w-28 rounded-xl shadow-xl"})})]}),o("div",{className:"flex-grow mt-5 sm:mt-0 sm:ml-8 max-w-lg xl:max-w-2xl space-y-3",children:[A("h1",{className:"inline-flex items-center text-2xl sm:text-2xl lg:text-4xl font-bold lg:font-semibold",children:v}),N?A("span",{className:"block text-sm text-neutral-500 dark:text-neutral-400",dangerouslySetInnerHTML:{__html:N||""}}):null,!!t.websiteUrl&&o("a",{href:t.websiteUrl,target:"_blank",rel:"noopener noreferrer",className:"flex items-center text-xs font-medium space-x-2.5 cursor-pointer text-neutral-500 dark:text-neutral-400 truncate",children:[o("svg",{className:"flex-shrink-0 w-4 h-4",viewBox:"0 0 24 24",fill:"none",children:[A("path",{d:"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),A("path",{d:"M7.99998 3H8.99998C7.04998 8.84 7.04998 15.16 8.99998 21H7.99998",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),A("path",{d:"M15 3C16.95 8.84 16.95 15.16 15 21",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),A("path",{d:"M3 16V15C8.84 16.95 15.16 16.95 21 15V16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),A("path",{d:"M3 9.0001C8.84 7.0501 15.16 7.0501 21 9.0001",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),A("span",{className:"text-neutral-700 dark:text-neutral-300 truncate",children:t.websiteUrl})]}),C.length?A("nav",{className:"nc-SocialsList flex flex-wrap text-2xl text-neutral-6000 dark:text-neutral-300 ",children:C.map((e,r)=>A("a",{className:"block w-7 h-7 mr-2.5 my-0.5",href:e.href,target:"_blank",rel:"noopener noreferrer",title:e.name,children:A("img",{src:e.iconPng,alt:e.name})},r))}):null,L&&A("div",{className:"PageArchiveAuthor__clearFavoritesButton inline-flex lg:hidden",dangerouslySetInnerHTML:{__html:U}})]}),o("div",{className:"flex flex-col space-y-2.5 absolute top-0 right-0 p-5 lg:p-8",children:[m&&o(ne,{className:"!rounded-xl",sizeClass:"px-3 py-2 sm:px-6",href:frontendObject.pageNcmazAccountUrl,children:[A("span",{className:"hidden lg:block",children:s["Edit profile"]}),A("span",{className:"block lg:hidden",children:A("i",{className:"las la-user-edit text-xl"})})]}),!!t.buymeacoffeUrl&&A("a",{className:"hidden lg:block",href:t.buymeacoffeUrl,target:"_blank",rel:"noopener noreferrer",title:"buy-me-a-coffee",children:A("img",{src:ncmazFrontendVariables.pluginDistImagesDir+"buymeacoffee.svg",alt:"buy-me-a-coffee",className:"w-36 rounded-xl shadow-xl hover:opacity-80 transition-opacity"})}),L&&A("div",{className:"PageArchiveAuthor__clearFavoritesButton hidden lg:block",dangerouslySetInnerHTML:{__html:U}})]})]})})]}),o("div",{className:"container py-16 lg:pb-24 lg:pt-20 space-y-16 lg:space-y-24",children:[o("main",{children:[o("div",{className:"flex flex-col sm:items-center sm:justify-between sm:flex-row",children:[A(ae,{containerClassName:"flex-1 sm:pr-5 overflow-hidden",className:"lg:space-x-2 overflow-x-auto hiddenScrollbar",children:n.map((e,r)=>A(se,{isActive:l===e,onClick:()=>P(e),children:e},r))}),A("div",{className:"block my-4 border-b w-full border-neutral-100 sm:hidden"}),A("div",{className:"flex flex-shrink-0 justify-end",children:A(_,{lists:j,onChangeSelect:H,defaultValue:d})})]}),Z()]}),B.enable&&A($,{...B,isCategory:!1})]})]})};export{LA as default};
